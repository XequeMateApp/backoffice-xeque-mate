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
  selectFileName: string;
  productsData: any;
  FilesDoc: any;
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
    this.productsData = JSON.parse(localStorage.getItem('productsData'));

    this.FilesDoc = this.productsData.doc;
    console.log(this.FilesDoc);
    this.form.controls['name'].setValue(this.productsData.name);
    this.form.controls['cnpjcpf'].setValue(this.productsData.cnpj);
    this.form.controls['contact'].setValue(this.productsData.tel);
    this.form.controls['email'].setValue(this.productsData.email);
  }
  downloadFile() {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,' + btoa(this.FilesDoc);
    link.download = this.FilesDoc;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
}
