import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validate-supplier',
  templateUrl: './validate-supplier.component.html',
  styleUrls: ['./validate-supplier.component.scss']
})
export class ValidateSupplierComponent implements OnInit {
  form: FormGroup;
  notImage = true;
  productsData: any;
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
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.form.controls['name'].setValue(this.productsData.name);
    this.form.controls['cnpj'].setValue(this.productsData.cnpj);
    this.form.controls['contact'].setValue(this.productsData.tel);
    this.form.controls['email'].setValue(this.productsData.email);
  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.selectFile = [];
          this.selectFile.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSelectFileName(event) {
    this.selectFileName = event.target.files[0].name;
  }
}
