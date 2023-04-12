import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-close-supplier-customers-client',
  templateUrl: './close-supplier-customers-client.component.html',
  styleUrls: ['./close-supplier-customers-client.component.scss']
})
export class CloseSupplierCustomersClientComponent implements OnInit {
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
  }
}
