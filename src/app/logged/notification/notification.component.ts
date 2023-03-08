import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatamockService } from 'src/services/datamock.service';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';
import { EditNotificationComponent } from './components/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './components/delete-notification/delete-notification.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: any[];
  paginationProduct: number = 1;
  
  constructor(
    private datamockService: DatamockService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.notifications = this.datamockService.notificationList;
  }

  openModals(tabName: string){
    if(tabName == 'create'){
      this.modalService.open(CreateNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    } else if(tabName == 'edit'){
      this.modalService.open(EditNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
    }else if(tabName == 'delete'){
      this.modalService.open(DeleteNotificationComponent, { centered: true, backdrop: 'static', keyboard: false })
  
    }
  }

}
