import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      content: [''],
      repetition: [''],
      dateStart: [''],
      time: [''],
      supplier: [''],
      client: ['']
    })
  }
  ngOnInit(): void {

  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}