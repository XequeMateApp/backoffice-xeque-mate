import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { EditSupplierCustomersClientComponent } from './components/edit-supplier-customers-client/edit-supplier-customers-client.component';
import { CloseSupplierCustomersClientComponent } from './components/close-supplier-customers-client/close-supplier-customers-client.component';
import { EditSupplierCustomersComponent } from './components/edit-supplier-customers/edit-supplier-customers.component';
import { CloseSupplierCustomersComponent } from './components/close-supplier-customers/close-supplier-customers.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { UserService } from 'src/services/user.service';
import { SupplierCustomersResponsetDto } from 'src/app/dto/logged/supplier-costumers-response.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';
@Component({
  selector: 'app-suppliers-customers',
  templateUrl: './suppliers-customers.component.html',
  styleUrls: ['./suppliers-customers.component.scss']
})

export class SuppliersCustomersComponent implements OnInit {
  ArrayInfoUser: any = [];
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  response: SupplierCustomersResponsetDto[];
  filterTerm!: string;
  user: any;
  officerAdm: string;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getListUsert();
  }

  getListUsert(): void {
    this.userService.getAllClients().subscribe(
      success => {
        this.response = success;
        this.response = this.response.filter(item => item.status !== 'inactive')

        console.log('a response eh?', this.response)
      },
      error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'data not collected')
      }
    )
  }

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  openModals(tabName: string, info: any) {
    console.log('o item eh ', info)

    if (tabName == 'editclient') {
      const modal = this.modalService.open(EditSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getListUsert();
      })
    } else if (tabName == 'deleteclient') {
      const modal = this.modalService.open(CloseSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getListUsert();
      })
    } else if (tabName == 'editsupplier') {

      const modal = this.modalService.open(EditSupplierCustomersComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {

      }, err => {
        this.getListUsert();
      })
    } else if (tabName == 'deletesupplier') {
      const modal = this.modalService.open(CloseSupplierCustomersComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getListUsert();
      })
    }
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
  }


  sortListByTime(value: string): void {
    if (value === 'bigger') {
      this.response.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }else if(value === 'smaller'){
      this.response.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

  }

  sortListByType(value: string) {
    if (value === 'cliente') this.response.sort((a, b) =>  a.profile.localeCompare(b.profile));
    else if (value === 'fornecedor') this.response.sort((a, b) => b.profile.localeCompare(a.profile));
  }
}
