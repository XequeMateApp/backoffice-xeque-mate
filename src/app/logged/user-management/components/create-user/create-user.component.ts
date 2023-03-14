import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
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
