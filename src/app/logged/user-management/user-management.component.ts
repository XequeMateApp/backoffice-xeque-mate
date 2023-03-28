import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { ConfirUserComponent } from './components/confir-user/confir-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserGetResponseDto } from 'src/app/dto/logged/user-get-response.dto';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  response: UserGetResponseDto[] = [];
  responseFilter: UserGetResponseDto[] = [];

  filterTerm!: string;
  responsestatus: string;
  uniqueFilter: string[];
  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,
  ) {
  }
  ngAfterViewInit(): void {
    this.getUsers();
  }

  ngOnInit(): void {
  }


  getUsers() {
    this.userService.getUsers().subscribe(
      response => {
        this.response = response;
        this.responseFilter = response.map(response => {
          this.translateFilter(response);
          return response;
        });
        const uniqueFilterDict = response.reduce<{ [filter: string]: boolean }>(
          (uniqueFilter, { filter }) => {
            uniqueFilter[filter] = true;
            return uniqueFilter;
          },
          {}
        );
        this.uniqueFilter = Object.keys(uniqueFilterDict);
        console.log(this.uniqueFilter);
        console.log(this.response);
      },
      error => { console.error(error, 'data not collected') }
    )
  }
  translateFilter(response: UserGetResponseDto) {
    if (response.filter === 'ADMINISTRATOR') response.filter = 'Administrador';
    else if (response.filter === 'PRODUCTS') response.filter = 'Produto';
    else if (response.filter === 'KYC') response.filter = 'Kyc';
    else if (response.filter === 'CUSTOMERS') response.filter = 'Cliente';
    else if (response.filter === 'ACCESCONTROL') response.filter = 'Controle de acesso';
    else if (response.filter === 'NOTIFICATIONS') response.filter = 'Notificações';
  }
  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  sortListByType(value: string): void {
    // console.log(value)
    // if (value === 'Administrador') this.response.sort((a, b) => { return a.filter.localeCompare(b.filter); });
    // else if (value === 'Produto') this.response.sort((a, b) => { return b.filter.localeCompare(a.filter); });
    // else if (value === 'Kyc') this.response.sort((a, b) => { return b.filter.localeCompare(a.filter); });
    // else if (value === 'Cliente') this.response.sort((a, b) => { return b.filter.localeCompare(a.filter); });
    // else if (value === 'Controle de acesso') this.response.sort((a, b) => { return b.filter.localeCompare(a.filter); });
    // else if (value === 'Notificações') this.response.sort((a, b) => { return b.filter.localeCompare(a.filter); });
  }

  createOpenModal() {
    this.modalService.open(CreateUserComponent, { centered: true, backdrop: 'static', keyboard: false })

  }
  openModals(tabName: string, info: string[]) {
    // enviando dados pro localhost
    LocalStorageUtil.set(LocalStorageKeys.productsData, info)
    if (tabName === 'Edit') {
      this.modalService.open(EditUserComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
    else if (tabName === 'Delete') {
      this.modalService.open(ConfirUserComponent, { centered: true, backdrop: 'static', keyboard: false })

    }
  }
}
