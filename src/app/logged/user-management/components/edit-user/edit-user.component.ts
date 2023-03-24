import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  productsData: any;
  editNotStatus: string;
  checked: string;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      status: [''],
      tel: [''],
      funtions: [''],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.editNotStatus = this.productsData.status;
    this.form.controls['name'].setValue(this.productsData.name)
    this.form.controls['email'].setValue(this.productsData.email)
    this.form.controls['tel'].setValue(this.productsData.tel)
    this.checked = this.productsData.funcoes;
  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}
