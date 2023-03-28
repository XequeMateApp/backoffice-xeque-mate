import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  userEdit: SupplierInterface[];
  userDataStatus: any;
  userData: any;
  checkAdm: any;
  checkProd: any;
  checkKyc: any;
  checkClient: any;
  checkControlAccess: any;
  checkNot: any;
  constructor(
    private datamockService: DatamockService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      tel: [''],
      funcoes: [''],
      status: [''],
    })
  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    this.userEdit = this.datamockService.getsupplier();
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['email'].setValue(this.userData.email)
    this.form.controls['tel'].setValue(this.userData.tel)
    
    this.checkAdm = this.form.controls['funcoes'].setValue(this.userData.funcoes)
    this.checkProd = this.form.controls['funcoes'].setValue(this.userData.funcoes)
    this.checkKyc = this.form.controls['funcoes'].setValue(this.userData.funcoes)
    this.checkClient = this.form.controls['funcoes'].setValue(this.userData.funcoes)
    this.checkControlAccess = this.form.controls['funcoes'].setValue(this.userData.funcoes)
    this.checkNot = this.form.controls['funcoes'].setValue(this.userData.funcoes)


  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm(): void { }
}
