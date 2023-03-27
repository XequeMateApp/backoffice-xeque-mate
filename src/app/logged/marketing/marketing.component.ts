import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { NotificationInterface } from 'src/app/interface/notification.interface';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { DatamockService } from 'src/services/datamock.service';
import { CreateNotificationComponent } from '../notification/components/create-notification/create-notification.component';
import { DeleteNotificationComponent } from '../notification/components/delete-notification/delete-notification.component';
import { EditNotificationComponent } from '../notification/components/edit-notification/edit-notification.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { DeleteAdComponent } from './components/delete-ad/delete-ad.component';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  notifications:NotificationInterface[];

  @Input('data') meals: string[] = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };
  filterTerm!: string;
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.notifications = this.datamockService.notificationList;
  }

  backHome(){
    this.router.navigate(['/logged/dashboard']);
  }

  createOpenModal(){
    this.modalService.open(CreateAdComponent, { centered: true, backdrop: 'static', keyboard: false })
  }

  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.userData, info);
    if (tabName === 'edit') {
      this.modalService.open(EditAdComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName === 'delete') {
      this.modalService.open(DeleteAdComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.notifications.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    console.log(this.notifications);
  }
  sortListByType(value: string) {
   
   
    if (value === 'Ativo') this.notifications.sort((a, b) => { return a.status.localeCompare(b.status); });
    else if (value === 'Inativo') this.notifications.sort((a, b) => { return b.status.localeCompare(a.status); });
  }
}


