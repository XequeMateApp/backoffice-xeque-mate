import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {
  constructor(
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
  }
  exit() {
    this.modalService.dismissAll()
  }
}
