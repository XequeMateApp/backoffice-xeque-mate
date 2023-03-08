import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent implements OnInit {

  constructor(
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
  }
  exit() {
    this.modalService.dismissAll()
  }
}
