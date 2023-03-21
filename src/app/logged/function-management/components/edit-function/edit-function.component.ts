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
  productsData: any;
  checkAdm: any;
  checkProd: any;
  checkKyc: any;
  checkClient: any;
  checkControlAccess: any;
  checkNot: any;
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
      funtions: [''],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.form.controls['name'].setValue(this.productsData.name)
    this.form.controls['name'].setValue(this.productsData.name)

    this.checkAdm = this.form.controls['funcoes'].setValue(this.productsData.funcoes)
    this.checkProd = this.form.controls['funcoes'].setValue(this.productsData.funcoes)
    this.checkKyc = this.form.controls['funcoes'].setValue(this.productsData.funcoes)
    this.checkClient = this.form.controls['funcoes'].setValue(this.productsData.funcoes)
    this.checkControlAccess = this.form.controls['funcoes'].setValue(this.productsData.funcoes)
    this.checkNot = this.form.controls['funcoes'].setValue(this.productsData.funcoes)

  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}
