import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';
import { ValidateSupplierComponent } from './components/validate-supplier/validate-supplier.component';
import { SupplierInterface } from 'src/app/interface/supplier.interface';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supplier: SupplierInterface[];
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

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  openModals(tabName: string) {
    if (tabName == 'verificar') {
      this.modalService.open(ValidateSupplierComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.supplier.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    console.log(this.supplier);
  }

}
