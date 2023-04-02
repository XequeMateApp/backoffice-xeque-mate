import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('createname') createname: ElementRef;
  @ViewChild('createprice') createprice: ElementRef;
  @ViewChild('createcnpj') createcnpj: ElementRef;
  @ViewChild('createcode') createcode: ElementRef;
  @ViewChild('selectOptions') selectOptions: ElementRef;
  @ViewChild('createcategory') createcategory: ElementRef;
  @ViewChild('createimg') createimg: ElementRef;
  @ViewChild('createdescription') createdescription: ElementRef;
  @ViewChild('createspecification') createspecification: ElementRef;

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

  alertFieldsName = false;
  alertFieldPrice = false;
  alertFieldCnpj = false;
  alertFieldCode = false;
  alertFieldCategory = false;
  alertFieldDescription = false;
  alertFieldImg = false;
  alertFieldSpecification = false;

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

  verifiField() {
    // let price = String(this.form.controls['price'].value);
    if (this.form.controls['name'].value === '') {
      this.createname.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsName = true;
      setInterval(() => {
        this.createname.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsName = false;
      }, 5000);
    }
    else if (String(this.form.controls['price'].value) === '') {
      this.createprice.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldPrice = true;
      setInterval(() => {
        this.createprice.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldPrice = false;
      }, 5000);
    }
    else if (this.form.controls['cnpj'].value === '') {
      this.createcnpj.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldCnpj = true;
      setInterval(() => {
        this.createcnpj.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldCnpj = false;
      }, 5000);
    }
    else if (this.form.controls['code'].value === '') {
      this.createcode.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldCode = true;
      setInterval(() => {
        this.createcode.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldCode = false;
      }, 5000);
    }
    else if (this.form.controls['selectCategory'].value === '') {
      this.selectOptions.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldCategory = true;
      setInterval(() => {
        this.selectOptions.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldCategory = false;
      }, 5000);
    }
    else if (this.form.controls['selectPhotos'].value === '') {
      this.createimg.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldImg = true;
      setInterval(() => {
        this.createimg.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldImg = false;
      }, 5000);
    }
    else if (this.form.controls['description'].value === '') {
      this.createdescription.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldDescription = true;
      setInterval(() => {
        this.createdescription.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldDescription = false;
      }, 5000);
    }
    else if (this.form.controls['specification'].value === '') {
      this.createspecification.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldSpecification = true;
      setInterval(() => {
        this.createspecification.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldSpecification = false;
      }, 5000);
    }
  }


  //FUNCTION-SELECTION
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

// FUNCTION-IMAGE
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



  confirm() {
    this.verifiField();
  }


  // general-functions
  exit() {
    this.modalService.dismissAll()
  }

}
