import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { EditSupplierCustomersClientComponent } from './components/edit-supplier-customers-client/edit-supplier-customers-client.component';
import { CloseSupplierCustomersClientComponent } from './components/close-supplier-customers-client/close-supplier-customers-client.component';

@Component({
  selector: 'app-suppliers-customers',
  templateUrl: './suppliers-customers.component.html',
  styleUrls: ['./suppliers-customers.component.scss']
})
export class SuppliersCustomersComponent implements OnInit {

   supplier: SupplierInterface[];

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
    if (tabName == 'edit') {
      this.modalService.open(EditSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'delete') {
      this.modalService.open(CloseSupplierCustomersClientComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    console.log(this.supplier);
  }
  sortListByType(value: string){
    if(value === 'cliente') this.supplier.sort((a, b) =>{return a.type.localeCompare(b.type);});
    else if (value === 'fornecedor') this.supplier.sort((a, b) =>{return b.type.localeCompare(a.type);});
  }
}
