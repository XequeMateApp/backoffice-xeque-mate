import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { DatamockService } from 'src/services/datamock.service';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {

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
  typeCategory = 'Tipo';
  orderby = 'Ordenar por'
  suppliermaterial: any;
  uniqueCategory: string[];
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }
  ngOnInit(): void {
    this.supplier = this.datamockService.supplier;
    this.removeDuplicates(this.supplier)
  }
  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }
  createOpenModals() {
    this.modalService.open(CreateCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
  }
  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.productsData, info);
     if (tabName === 'edit') {
      this.modalService.open(EditCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName === 'delete') {
      this.modalService.open(DeleteCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.namecategory.localeCompare(b.namecategory);
    }
    );
    this.orderby = 'Nome A-Z'
  }

  removeDuplicates(list: SupplierInterface[]) {
    this.uniqueCategory = [...new Set(list.map(obj => obj.category))];
  }

  sortListByType(value: string) {
    console.log(value)
    this.typeCategory = value;
    if (value === 'Material de construção') this.supplier.sort((a, b) => { return a.category.localeCompare(b.category); });
    else if (value === 'Material de madeira') this.supplier.sort((a, b) => { return b.category.localeCompare(a.category); });
  }
}
