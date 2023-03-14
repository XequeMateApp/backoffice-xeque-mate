import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-supplier-customers',
  templateUrl: './edit-supplier-customers.component.html',
  styleUrls: ['./edit-supplier-customers.component.scss']
})
export class EditSupplierCustomersComponent implements OnInit {
  form: FormGroup;
  selectFile: any = [];
  selectFileName: String;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpjcpf: [''],
      contact: [''],
      email: [''],
      supplier: [''],
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
