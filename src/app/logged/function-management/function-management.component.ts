import { Component, Input, OnInit } from '@angular/core';
import { CreateFunctionComponent } from './components/create-function/create-function.component';
import { DeleteFunctionComponent } from './components/delete-function/delete-function.component';
import { EditFunctionComponent } from './components/edit-function/edit-function.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-function-management',
  templateUrl: './function-management.component.html',
  styleUrls: ['./function-management.component.scss']
})
export class FunctionManagementComponent implements OnInit {
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

  openModals(tabName: string) {
    if (tabName == 'create') {
      this.modalService.open(CreateFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'delete') {
      this.modalService.open(DeleteFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'edit') {
      this.modalService.open(EditFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
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


  sortListByType(value: string) {
    if (value === 'permitiona') this.supplier.sort((a, b) => { return a.permition.localeCompare(b.permition); });
    else if (value === 'permitionb') this.supplier.sort((a, b) => { return b.permition.localeCompare(a.permition); });
  }
}
