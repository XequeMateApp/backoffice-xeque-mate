import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { ValidateSupplierComponent } from './components/validate-supplier/validate-supplier.component';
import { SupplierRegisterResponseDto } from 'src/app/dto/logged/supplier-register-response.dto';
import { UserService } from 'src/services/user.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { Page404Component } from 'src/app/shared/page404/page404.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  filterTerm!: string;
  response: SupplierRegisterResponseDto[] = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.userService.getUserPlataform('inactive').subscribe(
      success => {
        this.response = success;
      },
      error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'dados não coletados!!') }
    )
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info)
    if (tabName === 'verificar') {
      const modal = this.modalService.open(ValidateSupplierComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getUsers();
      })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    console.log(this.response);
  }

}
