import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductsRegisterRequestDto } from 'src/app/dto/logged/products-register-request.dto';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { DatamockService } from 'src/services/datamock.service';
import { ProductService } from 'src/services/products.service';

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
  request: ProductsRegisterRequestDto;



  selectFileName: String;
  supplierImg: string[] = [];
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
  imageSrc: string;
  selectedCategories: string[];


  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private datamockService: DatamockService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      code: [''],
      selectCategory: ['diversos'],
      selectPhotos: ['imagens'],
      description: [''],
      specification: [''],
      cnpj: [''],
      price: [''],
    })
  }

  ngOnInit(): void {
    this.supplier = this.datamockService.getsupplier();
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
    // else if (this.form.controls['selectCategory'].value === '') {
    //   this.selectOptions.nativeElement.classList.add("border-danger", "border", "text-danger");
    //   this.alertFieldCategory = true;
    //   setInterval(() => {
    //     this.selectOptions.nativeElement.classList.remove("border-danger", "border", "text-danger");
    //     this.alertFieldCategory = false;
    //   }, 5000);
    // }
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
      this.selectedItems.push(selectedOption)
    }
    this.selectedCategories = this.selectedItems.map(item => item.category);
    console.log(this.selectedCategories);
  }

  removeItem(item: SupplierInterface) {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }

  // FUNCTION-IMAGE
  onSelectFileProductImage(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.notImage = false;
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.supplierImg.push(e.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
      console.log('Selected images:', this.supplierImg);
    }
  }


  removeFile(index: number) {
    this.supplierImg.splice(index, 1);
    this.form.controls['selectPhotos'].setValue(null);
    // this.selectFile = null;
    this.notImage = true;
    this.selectedImageUrl = '';
  }


  confirm() {
    // this.verifiField();
    this.request = {
      name: "blablabla",
      code: "dfnoiwefiwefwe",
      specification: "dfnoiwefiwefwe",
      description: "dfnoiwefiwefwe",
      image: this.form.controls['selectPhotos'].value,
      status: "APPROVED",
      cnpj: "string",
      value: this.form.controls['price'].value,
      category: this.form.controls['selectCategory'].value,
    }
    console.log(this.request)
    this.productService.register(this.request).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
        this.toastrService.success('Cadastrado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao cadastrar', '', { progressBar: true });
      }
    )
  }


  // general-functions
  exit() {
    this.modalService.dismissAll();
  }

}
