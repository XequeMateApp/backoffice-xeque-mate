import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';

@Component({
  selector: 'app-analysis-product',
  templateUrl: './analysis-product.component.html',
  styleUrls: ['./analysis-product.component.scss']
})
export class AnalysisProductComponent implements OnInit {
  form: FormGroup;

  selectFileName: String;
  supplierImg: string[];
  selectedItems: SupplierInterface[] = [];
  FilesDoc: SupplierInterface[];
  FileNameDoc: String;

  productsData: any;

  supplier: SupplierInterface[];
  selectedImageUrl: string;
  selectFile: any = [];
  notImage = true;


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private datamockService: DatamockService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      material: [''],
      code: [''],
      selectCategory: [''],
      selectPhotos: [''],
      price: [''],
      status: [''],
      doc: [''],
    })
  }


  ngOnInit(): void {
    this.supplier = this.datamockService.getsupplier();
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    console.log(this.productsData)
    this.supplierImg = this.productsData.img;
    this.FilesDoc = this.productsData.doc;

    console.log(this.supplierImg);
    this.form.controls['name'].setValue(this.productsData.name)
    this.form.controls['price'].setValue(this.productsData.price)
    this.form.controls['code'].setValue(this.productsData.code)
    this.form.controls['material'].setValue(this.productsData.material)
    this.form.controls['selectCategory'].setValue(this.productsData.category)
    this.form.controls['status'].setValue(this.productsData.status)
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


  // functions-photos

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          // this.selectFile = [];
          this.selectFile.push(event.target.result);
          this.selectedImageUrl = null;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
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

  addImages() {
    this.supplier.push()
  }

  removeFile(index: number) {
    this.supplierImg.splice(index, 1);
    console.log('ué')
    this.form.controls['selectPhotos'].setValue(null);
    // this.selectFile = null;
    this.notImage = true;
    this.selectedImageUrl = '';
  }

  // docs
  downloadFile() {

  }



  // general-functions
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
}
