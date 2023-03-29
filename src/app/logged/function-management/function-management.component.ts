import { Component, Input, OnInit } from '@angular/core';
import { CreateFunctionComponent } from './components/create-function/create-function.component';
import { DeleteFunctionComponent } from './components/delete-function/delete-function.component';
import { EditFunctionComponent } from './components/edit-function/edit-function.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { RoleService } from 'src/services/role.service';

@Component({
  selector: 'app-function-management',
  templateUrl: './function-management.component.html',
  styleUrls: ['./function-management.component.scss']
})
export class FunctionManagementComponent implements OnInit {
  response: RoleResponseDto[] = [];
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
    private router: Router,
    private roleService: RoleService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getRoles();
    this.user = JSON.parse(localStorage.getItem('user'));
    const domain = this.user.email.split("@")[1];
    this.officerAdm = domain;
    // FILTRO POR FUNÇÃO - NÃO FUNCIONAL
    // this.removeDuplicates(this.response)
  }

  getRoles() {
    this.roleService.getRole().subscribe(
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
  createOpenmodal() {
    this.modalService.open(CreateFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
  }
  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'delete') {
      this.modalService.open(DeleteFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'edit') {
      this.modalService.open(EditFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }

  // FILTRO POR FUNÇÃO - NÃO FUNCIONAL
  // removeDuplicates(list: RoleResponseDto[]) {
  //   this.uniquePermition = [...new Set(list.map(obj => obj.administrator))];
  // }
  // sortListByType(value: string) {
  //   this.typeFilter = value;
  //   if (value === 'Administrador') this.supplier.sort((a, b) => { return a.permition.localeCompare(b.permition); });
  //   else if (value === 'Funcionário') this.supplier.sort((a, b) => { return b.permition.localeCompare(a.permition); });
  // }
}
