import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';
import * as DataproductService from 'src/services/dataproduct.service';

@Component({
  selector: 'app-analysis-product',
  templateUrl: './analysis-product.component.html',
  styleUrls: ['./analysis-product.component.scss']
})
export class AnalysisProductComponent implements OnInit {
  form: FormGroup;
  selectFile: any = [];
  selectFileName: String;
  supplier: SupplierInterface[];

  options: SupplierInterface[] = DataproductService.products; 
  selectedItems: SupplierInterface[] = []; 


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private datamockService: DatamockService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpjcpf: [''],
      contact: [''],
      email: [''],
      doc: [''],
      code: [''],
      price: [''],
    })
  }


  ngOnInit(): void {
    this.supplier = this.datamockService.supplier;
    console.log(typeof this.supplier);

  }

  onOptionSelected(optionId: string) {
    const selectedOption = this.options.find(option => option._id === +optionId);
    if (selectedOption && !this.selectedItems.includes(selectedOption)) {
      this.selectedItems.push(selectedOption);
    }
  }

  addItem() {
    const selectElement = document.querySelector('select');
    const selectedOptionId = selectElement.value;
    const selectedOption = this.options.find(option => option._id === +selectedOptionId);
    if (selectedOption && !this.selectedItems.includes(selectedOption)) {
      this.selectedItems.push(selectedOption);
    }
  }

  removeItem(item: SupplierInterface) {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
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
