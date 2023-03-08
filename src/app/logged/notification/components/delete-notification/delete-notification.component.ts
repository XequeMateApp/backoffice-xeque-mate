import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss']
})
export class DeleteNotificationComponent implements OnInit {
  constructor(
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
  }
  exit() {
    this.modalService.dismissAll()
  }
}
