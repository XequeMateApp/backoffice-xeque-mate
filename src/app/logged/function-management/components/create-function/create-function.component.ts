import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.scss']
})
export class CreateFunctionComponent implements OnInit {
  form: FormGroup;
  productsData: any;

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
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.form.controls['name'].setValue(this.productsData.name)
    this.form.controls['name'].setValue(this.productsData.name)
  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}
