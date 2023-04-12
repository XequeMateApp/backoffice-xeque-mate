import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';
import { EditNotificationComponent } from './components/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './components/delete-notification/delete-notification.component';
import { PaginationInstance } from 'ngx-pagination';
import { NotificationInterface } from 'src/app/interface/notification.interface';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { NotificationService } from 'src/services/notification.service';
import { NotificationResponsetDto } from 'src/app/dto/logged/notification-response.dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {

  response: NotificationResponsetDto[];

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
    this.notificationService.getNotification().subscribe(
      success => {
        this.response = success;
        console.log(this.response)
      },
      error => { console.error(error, 'data not collected') }
    );
  }


  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }

  createOpenModal() {
    this.modalService.open(CreateNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
  }

  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'edit') {
      this.modalService.open(EditNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if (tabName == 'delete') {
      this.modalService.open(DeleteNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.orderby = 'Nome A-Z'
  }
}
