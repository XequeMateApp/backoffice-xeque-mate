import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';

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

  openModals(tabName: string) {
    if (tabName == 'verificar') {
      // this.modalService.open(ValidateSupplierComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
}
