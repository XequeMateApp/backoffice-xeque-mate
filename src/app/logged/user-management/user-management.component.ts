import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    itemsPerPage: 4,
    currentPage: 1
  };
  constructor(
    private datamockService: DatamockService,
    private router: Router,
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
