import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  FileNameDoc: String;

  alertFieldCategory = false;
  responseData: any;

  supplier: SupplierInterface[];
  selectedImageUrl: string;
  selectFile: any = [];
  notImage = true;
  pdfFileName: string;
  FilesDoc: any;
  items: string[];
  selectedCategories: string[];

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
      description: [''],
      specification: [''],
      price: [''],
      status: [''],
      doc: [''],
    })
  }


  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.supplier = this.datamockService.getsupplier();
    this.FilesDoc = this.responseData.doc;
    console.log(this.FilesDoc);
    console.log(this.responseData)
    // console.log(this.supplierImg);
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['price'].setValue(this.responseData.value)
    this.form.controls['code'].setValue(Number(this.responseData.code))
    this.form.controls['material'].setValue(this.responseData.material)
    this.form.controls['selectCategory'].setValue(this.responseData.category)
    this.form.controls['description'].setValue(this.responseData.description)
    this.form.controls['specification'].setValue(this.responseData.specifications)
    this.getImagesFromLocalStorage();
  }


  //FUNCTION-SELECTION
  // esse aqui tá dificil
  onOptionSelected(optionId: string) {
    const selectedOption = this.supplier.find(option => option._id === +optionId);
    if (selectedOption && !this.selectedItems.includes(selectedOption)) {
      this.selectedItems.push(selectedOption)
    }
    this.selectedCategories = this.selectedItems.map(item => item.category);
    console.log(this.selectedCategories);
  }

  removeItem(item: SupplierInterface) {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
      this.selectedCategories.splice(index, 1);
    }
  }

  getImagesFromLocalStorage() {
    const imagesData = JSON.parse(localStorage.getItem('responseData'));
    if (imagesData.image && Array.isArray(imagesData.image)) {
      this.supplierImg = imagesData.image;
    }
    console.log(this.supplierImg, 'qwedrfghjk');
  }


  // functions-photos
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
    this.form.controls['selectPhotos'].setValue(null);
    // this.selectFile = null;
    this.notImage = true;
    this.selectedImageUrl = '';
  }

  // docs
  // downloadFile() {
  //   const link = document.createElement('a');
  //   link.href = 'data:application/pdf;base64,' + btoa(this.FilesDoc);
  //   link.download = this.FilesDoc;
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }


  // general-functions
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
}
