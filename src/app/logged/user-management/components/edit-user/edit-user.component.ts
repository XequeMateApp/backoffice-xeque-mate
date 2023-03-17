import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
form:FormGroup;
  constructor(
    private modalService:NgbModal,
     private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
name: [''],
email: [''],
tel: [''],
adm: [''],
client: [''],
products: [''],
kyc: [''],
accessControl: [''],
notification: [''],
status: [''],
    })
  }

  ngOnInit(): void {
  }
exit(){
  this.modalService.dismissAll()
}
confirm():void{}
}
