import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
})
export class CreateNotificationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      textarea: [''],
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
