import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';
import { CreateUserComponent } from './components/create-user/create-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {



  supplier: any[];
  @Input('data') meals: string[] = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  filterTerm!: string;

  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.supplier = this.datamockService.supplier;
  }

  backHome(){
    this.router.navigate(['/logged/dashboard']);
  }
  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
  }
  sortListByType(value: string) {
    if (value === 'cliente') this.supplier.sort((a, b) => { return a.type.localeCompare(b.type); });
    else if (value === 'KYC') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
    else if (value === 'clientes') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
    else if (value === 'controledeacesso') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
    else if (value === 'notificacoes') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
    else if (value === 'produtos') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });
    else if (value === 'administrador') this.supplier.sort((a, b) => { return b.type.localeCompare(a.type); });

  }


  openModals(tabName: string) {
    if (tabName == 'Criar') {
       this.modalService.open(CreateUserComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
}
