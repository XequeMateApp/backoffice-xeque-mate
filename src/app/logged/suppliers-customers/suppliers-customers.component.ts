import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { EditSupplierCustomersClientComponent } from './components/edit-supplier-customers-client/edit-supplier-customers-client.component';
import { CloseSupplierCustomersClientComponent } from './components/close-supplier-customers-client/close-supplier-customers-client.component';
import { EditSupplierCustomersComponent } from './components/edit-supplier-customers/edit-supplier-customers.component';
import { CloseSupplierCustomersComponent } from './components/close-supplier-customers/close-supplier-customers.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
@Component({
  selector: 'app-suppliers-customers',
  templateUrl: './suppliers-customers.component.html',
  styleUrls: ['./suppliers-customers.component.scss']
})

export class SuppliersCustomersComponent implements OnInit {
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
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.supplier = this.datamockService.supplier;
    this.user = JSON.parse(localStorage.getItem('user'));
    const domain = this.user.email.split("@")[1];
    this.officerAdm = domain;
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  openModals(tabName: string, info: any) {
    if (tabName == 'editclient') {
      this.modalService.open(EditSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'deleteclient') {
      this.modalService.open(CloseSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'editsupplier') {
      this.modalService.open(EditSupplierCustomersComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'deletesupplier') {
      this.modalService.open(CloseSupplierCustomersComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
    LocalStorageUtil.set(LocalStorageKeys.productsData, info);

  }


  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }


  sortListByType(value: string) {
    if (value === 'cliente') this.supplier.sort((a, b) => { return a.type.localeCompare(b.type); });
    else if (value === 'fornecedor') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
  }
}
