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
  editNotStatus: string;
  checked: string;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      funtions: [''],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.editNotStatus = this.productsData.status;
    this.form.controls['name'].setValue(this.productsData.name)
    this.checked = this.productsData.funcoes;
  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm(): void {

  }
}
