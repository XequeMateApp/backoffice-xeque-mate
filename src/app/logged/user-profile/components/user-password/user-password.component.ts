import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent implements OnInit {

  form: FormGroup;
  selectFile: any = [];
  selectFileName: String;
  errorPassword=false;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {

  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    // const password = this.form.controls['password'].value;
    const newPassword = this.form.controls['newPassword'].value;
    const confirmNewPassword = this.form.controls['confirmNewPassword'].value;

    if( confirmNewPassword !== newPassword){
      this.errorPassword=true
    } 
    else {
      this.errorPassword=false
    }
  }
  onSelectFileName(event) {
    this.selectFileName = event.target.files[0].name;
  }
}