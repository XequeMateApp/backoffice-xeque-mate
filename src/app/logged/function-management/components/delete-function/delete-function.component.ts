import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-function',
  templateUrl: './delete-function.component.html',
  styleUrls: ['./delete-function.component.scss']
})
export class DeleteFunctionComponent implements OnInit {
  form: FormGroup;
  productsData: any;

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
  delete(){
    window.alert('Delete  ')
  }
}
