import { Component, Input, OnInit } from '@angular/core';
import { CreateFunctionComponent } from './components/create-function/create-function.component';
import { DeleteFunctionComponent } from './components/delete-function/delete-function.component';
import { EditFunctionComponent } from './components/edit-function/edit-function.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { UserService } from 'src/services/user.service';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { RoleService } from 'src/services/role.service';

@Component({
  selector: 'app-function-management',
  templateUrl: './function-management.component.html',
  styleUrls: ['./function-management.component.scss']
})
export class FunctionManagementComponent implements OnInit {
  response: RoleResponseDto[] = [];
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
  permitions: string[];
  uniquePermition: string[];
  typeFilter = 'tipo'
  responsePermitions: RoleResponseDto[];


  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private roleService: RoleService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getRoles();
    this.supplier = this.datamockService.supplier;
    this.user = JSON.parse(localStorage.getItem('user'));
    const domain = this.user.email.split("@")[1];
    this.officerAdm = domain;
    this.removeDuplicates(this.supplier)
  }

  getRoles() {
    this.roleService.getRole().subscribe(
      success => {
        this.response = success;
        this.responsePermitions = success.map(response => {
          this.revertPermitions(response);
          return response;
        });
        console.log(this.response)

      },
      error => { console.error(error, 'data not collected') }
    )
  }

  revertPermitions(response: RoleResponseDto){
    if (response.administrator === 'active') response.administrator = 'Administrador, '; else response.administrator = '';
    if (response.products === 'active') response.products = 'Produto,'; else response.products = '';
    if (response.kyc === 'active') response.kyc = 'Kyc,'; else response.kyc = '';
    if (response.customers === 'active') response.customers = 'Cliente,'; else response.customers = '';
    if (response.accesscontrol === 'active') response.accesscontrol = 'Controle de acesso,'; else response.accesscontrol = '';
    if (response.notifications === 'active') response.notifications = 'Notificações,'; else response.notifications = '';
  // }
  }
  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }
  createOpenmodal() {
    this.modalService.open(CreateFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
  }
  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.productsData, info);
    if (tabName == 'delete') {
      this.modalService.open(DeleteFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'edit') {
      this.modalService.open(EditFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }


  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }

  removeDuplicates(list: SupplierInterface[]) {
    this.uniquePermition = [...new Set(list.map(obj => obj.permition))];
  }
  sortListByType(value: string) {
    this.typeFilter = value;
    if (value === 'Administrador') this.supplier.sort((a, b) => { return a.permition.localeCompare(b.permition); });
    else if (value === 'Funcionário') this.supplier.sort((a, b) => { return b.permition.localeCompare(a.permition); });
  }
}
