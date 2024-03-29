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
import { Page404Component } from 'src/app/shared/page404/page404.component';

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
  rolesResolveMap = {
    'usuario': 'Usuário',
    'administrator': 'Administrador',
    'products': 'Produtos',
    'kyc': 'Kyc fornecedores',
    'customers': 'Fornecedores e clientes',
    'accesscontrol': 'Controle de acesso',
    'notifications': 'Notificações',
    'marketing': 'Marketing',
    'category': 'Categorias',
  };

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
  }


  getrolesResolve(values: string[]): string[] {
    const removeUsuario = values.includes('usuario');
    const filterUsuario = removeUsuario ? values.filter(value => value !== 'usuario') : values;
    const valorRoles = filterUsuario.map(role => this.rolesResolveMap[role] || 'desconhecida');
    return valorRoles;
  }



  getRoles() {
    this.roleService.getRole().subscribe(
      success => {
        this.response = success;
        console.log(this.response)
      },
      error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'dados não coletados!!') }
    )
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  createOpenmodal() {
    const modal = this.modalService.open(CreateFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getRoles();
    })
    this.modalService.open(CreateFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'delete') {
      const modal = this.modalService.open(DeleteFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getRoles();
      })
    } else if (tabName == 'edit') {
      const modal = this.modalService.open(EditFunctionComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getRoles();
      })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }

  // FILTRO POR FUNÇÃO - NÃO FUNCIONAL
  removeDuplicates(list: RoleResponseDto[]) {
    // this.uniquePermition = [...new Set(list.map(obj => obj.administrator))];
  }
  sortListByType(value: string) {
    // this.typeFilter = value;
    // if (value === 'Administrador') this.supplier.sort((a, b) => { return a.permition.localeCompare(b.permition); });
    // else if (value === 'Funcionário') this.supplier.sort((a, b) => { return b.permition.localeCompare(a.permition); });
  }
}
