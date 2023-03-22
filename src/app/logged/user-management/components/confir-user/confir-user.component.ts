import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confir-user',
  templateUrl: './confir-user.component.html',
  styleUrls: ['./confir-user.component.scss']
})
export class ConfirUserComponent implements OnInit {
  productsData: any;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
  }
  exit() {
    this.modalService.dismissAll()
  }
  delete() {
    window.alert('Delete  ')
  }
}
