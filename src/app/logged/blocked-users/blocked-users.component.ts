import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { Page404Component } from 'src/app/shared/page404/page404.component';
import { UserService } from 'src/services/user.service';
import { EditSupplierCustomersClientComponent } from '../suppliers-customers/components/edit-supplier-customers-client/edit-supplier-customers-client.component';
import { CloseSupplierCustomersClientComponent } from '../suppliers-customers/components/close-supplier-customers-client/close-supplier-customers-client.component';
import { EditSupplierCustomersComponent } from '../suppliers-customers/components/edit-supplier-customers/edit-supplier-customers.component';
import { CloseSupplierCustomersComponent } from '../suppliers-customers/components/close-supplier-customers/close-supplier-customers.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';

@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.component.html',
  styleUrls: ['./blocked-users.component.scss']
})
export class BlockedUsersComponent implements OnInit {

  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  response: any
  filterTerm!: string;
  selectedType: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getListUsert()
  }

  getListUsert(): void{
    this.userService.getBlockedUsers().subscribe({
      next: success => {
        this.response = success;
        console.log('a response eh?', this.response)
      },
      error: error => {
        //  this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'dados não coletados!!')
      }
  })
  }

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  sortListByType(value: string) {
    this.selectedType = value;
  }

  sortListByTime(value: string): void {
    if (value === 'new') {
      this.response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (value === 'old') {
      this.response.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
  }
  sortListByAlphabeticalOrder(value: string): void {
    if(value === 'A') this.response.sort((a, b) => {return a.name.localeCompare(b.name);});
    else if (value === 'B') this.response.sort((a, b) => {return b.name.localeCompare(a.name);});
  }


  openModals(tabName: string, info: any) {
    
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

}
