import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-supplier-customers-client',
  templateUrl: './edit-supplier-customers-client.component.html',
  styleUrls: ['./edit-supplier-customers-client.component.scss']
})
export class EditSupplierCustomersClientComponent implements OnInit {
  form: FormGroup;
  selectFile: any = [];
  selectFileName: String;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpj: [''],
      contact: [''],
      email: [''],
      doc: [''],

    })
  }
  ngOnInit(): void {

  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
  onSelectFileName(event) {    
    this.selectFileName = event.target.files[0].name;
  }
}
