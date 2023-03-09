import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supplier: any[];
  @Input('data') meals: string[] = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
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
    // if (tabName == 'create') {
    //   this.modalService.open(CreateNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    // } else if (tabName == 'edit') {
    //   this.modalService.open(EditNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    // } else if (tabName == 'delete') {
    //   this.modalService.open(DeleteNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    // }
  }
}
