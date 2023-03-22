import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;

  selectFileName: String;
  supplierImg: string[];
  selectedItems: SupplierInterface[] = [];
  FileNameDoc: String;

  productsData: any;

  supplier: SupplierInterface[];
  selectedImageUrl: string;
  selectFile: any = [];
  notImage = true;
  pdfFileName: string;


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private datamockService: DatamockService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      code: [''],
      selectCategory: [''],
      selectPhotos: [''],
      description: [''],
      specification: [''],
      cnpj: [''],
      price: [''],
    })
  }

  ngOnInit(): void {
    this.supplier = this.datamockService.getsupplier();
    this.supplierImg = [];
  }


  // functions-select

  onOptionSelected(optionId: string) {
    const selectedOption = this.supplier.find(option => option._id === +optionId);
    if (selectedOption && !this.selectedItems.includes(selectedOption)) {
      this.selectedItems.push(selectedOption);
    }
  }

  addItem() {
    const selectElement = document.querySelector('select');
    const selectedOptionId = selectElement.value;
    const selectedOption = this.supplier.find(option => option._id === +selectedOptionId);
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


  onSelectFileProductImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.supplierImg.push(event.target.result as string);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  removeFile(index: number) {
    this.supplierImg.splice(index, 1);
    console.log('ué')
    this.form.controls['selectPhotos'].setValue(null);
    // this.selectFile = null;
    this.notImage = true;
    this.selectedImageUrl = '';
  }



  // general-functions
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
}
