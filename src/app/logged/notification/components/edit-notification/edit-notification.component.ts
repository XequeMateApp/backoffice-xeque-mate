import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierInterface } from 'src/app/interface/supplier.interface';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {
  form: FormGroup;
  userData: any;
  editNotStatus: string;
  editNotRepetition: string;
  editNotFunction: string;

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
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData)
    this.editNotStatus = this.userData.status;
    this.editNotRepetition = this.userData.repetition;
    this.editNotFunction = this.userData.function;
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['textarea'].setValue(this.userData.content)
    this.form.controls['dateStart'].setValue(this.userData.startIn)
    this.form.controls['time'].setValue(this.userData.time)
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['name'].setValue(this.userData.name)
    this.form.controls['name'].setValue(this.userData.name)

  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}
