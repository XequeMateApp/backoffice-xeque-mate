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
  filterTerm!: string;
  user: any;
  officerAdm: string;
  suppliermaterial: any;
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }
  ngOnInit(): void {
    this.supplier = this.datamockService.supplier;
  }
  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }
  createOpenModals(){
    this.modalService.open(CreateProductComponent, { centered: true, backdrop: 'static', keyboard: false })
  }
  openModals(tabName: string, info: any) {
    LocalStorageUtil.set(LocalStorageKeys.productsData, info);
    if (tabName == 'analysisproduct') {
      this.modalService.open(AnalysisProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'editproduct') {
      this.modalService.open(EditProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'deleteproduct') {
      this.modalService.open(DeleteProductComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
    // this.ArrayInfoUser = [infoUser._id, infoUser.name]
    // localStorage.setItem('userinfo', this.ArrayInfoUser);
  }

  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }

  removeDuplicates(material: any): void {
    for (const key in material) {
      if (material.hasOwnProperty(key)) {
        const value = material[key];
        console.log(key + ': ' + value);
      }
    }
  }

  sortListByType(value: string) {
    if (value === 'cliente') this.supplier.sort((a, b) => { return a.type.localeCompare(b.type); });
    else if (value === 'fornecedor') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
  }
}
