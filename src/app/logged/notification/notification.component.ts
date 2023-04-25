import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';
import { EditNotificationComponent } from './components/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './components/delete-notification/delete-notification.component';
import { PaginationInstance } from 'ngx-pagination';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { NotificationService } from 'src/services/notification.service';
import { NotificationResponsetDto } from 'src/app/dto/logged/notification-response.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {

  response: NotificationResponsetDto[];
  responseData: any;
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };
  filterTerm!: string;
  orderby = 'Ordenar por';
  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getNotifications().subscribe({
      next: success => {
        this.response = success;
        console.log(this.response)
      },
      error: error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'data not collected') }
    });
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  createOpenModal() {
    const modal = this.modalService.open(CreateNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getNotifications();
    })
  }

  openModals(tabName: string, info: string[]) {
    if (tabName == 'edit') {
      const modal = this.modalService.open(EditNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        console.log('fechou')
        this.getNotifications();
      })

    } else if (tabName == 'delete') {
      const modal = this.modalService.open(DeleteNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getNotifications();
      })
    }
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.orderby = 'Nome A-Z'
  }
}
