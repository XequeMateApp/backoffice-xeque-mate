import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AnalysisProductComponent } from './components/analysis-product/analysis-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/product-register-response.dto';
import { ProductService } from 'src/services/products.service';
import { CategoryService } from 'src/services/category.service';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ArrayInfoUser: any = [];
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  maskParams = {
    thousandSeparator: ',',
  };
  response: ProductsRegisterResponseDto[] = [];
  responseCategory: CategoryResponseDto[] = [];

  filterTerm!: string;
  officerAdm: string;
  uniqueMaterials: any;
  typeFilter = 'Tipo';
  OrderBy = 'Ordenar por';


  constructor(
    private router: Router,
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {
  }



  ngOnInit(): void {
    this.getProducts();
    this.getCategorys();
    // this.removeDuplicates(this.response)
  }


  getProducts() {
    this.productService.getAllProducts().subscribe({
      next: success => {
        this.response = success.products;
        console.log(this.response)
      },
      error: error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'dados não coletados!!') }
    })
  }

  getCategorys() {
    this.categoryService.getCategory().subscribe(
      success => {
        this.responseCategory = success;
        console.log(this.responseCategory)
      },
      error => { console.error(error, 'category not collected') }
    )
  }

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  createOpenModals() {
    const modal = this.modalService.open(CreateProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getProducts();
    })
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'analysisproduct') {
      const modal = this.modalService.open(AnalysisProductComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getProducts();
      })
    } else if (tabName == 'editproduct') {
      const modal = this.modalService.open(EditProductComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getProducts();
      })
    } else if (tabName == 'deleteproduct') {
      const modal = this.modalService.open(DeleteProductComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getProducts();
      })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    this.OrderBy = 'Nome A-Z'
  }

  // removeDuplicates(list: ProductsRegisterResponseDto[]) {
  //   this.uniqueMaterials = [...new Set(list.map(obj => obj.name))];
  //   console.log( this.uniqueMaterials )
  // }

  sortListByType(value: string) {
    console.log(value);
    this.typeFilter = value;
    if (value === 'wood') {
      this.response.sort((a, b) => a.category[0].localeCompare(b.category[0]));
    } else if (value === 'plastic') {
      this.response.sort((a, b) => b.category[0].localeCompare(a.category[0]));
    }
  }


}
