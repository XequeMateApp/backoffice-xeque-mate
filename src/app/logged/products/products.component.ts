import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AnalysisProductComponent } from './components/analysis-product/analysis-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/products-register-response.dto';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  supplier: SupplierInterface[];
  ArrayInfoUser: any = [];
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  response: ProductsRegisterResponseDto[] = [];
  filterTerm!: string;
  officerAdm: string;
  uniqueMaterials: string[];
  typeFilter = 'Tipo';
  OrderBy = 'Ordenar por'
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.supplier = this.datamockService.supplier;
    console.log(this.supplier)
    this.removeDuplicates(this.supplier)
  }

  getProducts() {
    this.productService.getProducts('PENDING').subscribe(
      success => {
        this.response = success;
        console.log(this.response)
      },
      error => { console.error(error, 'data not collected') }
    )
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  createOpenModals() {
    this.modalService.open(CreateProductComponent, { centered: true, backdrop: 'static', keyboard: false })
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'analysisproduct') {
      this.modalService.open(AnalysisProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'editproduct') {
      this.modalService.open(EditProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'deleteproduct') {
      this.modalService.open(DeleteProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    this.OrderBy = 'Nome A-Z'
  }

  removeDuplicates(list: SupplierInterface[]) {
    this.uniqueMaterials = [...new Set(list.map(obj => obj.material))];
  }

  sortListByType(value: string) {
    console.log(value)
    this.typeFilter = value;
    if (value === 'madeira') this.supplier.sort((a, b) => { return a.material.localeCompare(b.material); });
    else if (value === 'plastico') this.supplier.sort((a, b) => { return b.material.localeCompare(a.material); });
  }
}
