import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.scss']
})
export class EditFunctionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      adm: [''],
      products: [''],
      kyc: [''],
      client: [''],
      accessControl: [''],
      notification: [''],
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
