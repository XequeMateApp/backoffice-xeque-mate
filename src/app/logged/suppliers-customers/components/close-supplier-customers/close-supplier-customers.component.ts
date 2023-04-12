import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-close-supplier-customers',
  templateUrl: './close-supplier-customers.component.html',
  styleUrls: ['./close-supplier-customers.component.scss']
})
export class CloseSupplierCustomersComponent implements OnInit {
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
  delete() {
  }
}
