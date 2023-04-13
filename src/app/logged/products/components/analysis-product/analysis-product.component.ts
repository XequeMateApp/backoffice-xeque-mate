import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { CategoryService } from 'src/services/category.service';
import { DatamockService } from 'src/services/datamock.service';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-analysis-product',
  templateUrl: './analysis-product.component.html',
  styleUrls: ['./analysis-product.component.scss']
})
export class AnalysisProductComponent implements OnInit {
  form: FormGroup;

  supplierImg: string[];
  selectedItems: SupplierInterface[] = [];
  responseCategory: CategoryResponseDto[] = [];

  selectFile: any = [];
  items: string[];
  selectedCategories: string[];


  FilesDoc: any;
  responseData: any;

  selectedImageUrl: string;
  pdfFileName: string;

  notImage = true;


  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
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
    this.FilesDoc = this.responseData.doc;
    console.log(this.FilesDoc);
    console.log(this.responseData.category)
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['price'].setValue(this.responseData.value)
    this.form.controls['code'].setValue(Number(this.responseData.code))
    this.form.controls['material'].setValue(this.responseData.material)
    this.form.controls['selectCategory'].setValue(this.responseData.category)
    this.form.controls['description'].setValue(this.responseData.description)
    this.form.controls['specification'].setValue(this.responseData.specifications)
    this.getImagesFromLocalStorage();
    this.getCategorys();
  }

  getCategorys(){
    this.categoryService.getCategory().subscribe(
      success => {
        this.responseCategory = success;
        // console.log(this.responseCategory)
      },
      error => { console.error(error, 'category not collected') }
    )
  }


  //FUNCTION-SELECTION
  // onOptionSelected(optionId: string) {
  //   const selectedOption = this.supplier.find(option => option._id === +optionId);
  //   if (selectedOption && !this.selectedItems.includes(selectedOption)) {
  //     this.selectedItems.push(selectedOption)
  //   }
  //   this.selectedCategories = this.selectedItems.map(item => item.category);
  //   console.log(this.selectedCategories);
  // }

  // removeItem(item: SupplierInterface) {
  //   const index = this.selectedItems.indexOf(item);
  //   if (index >= 0) {
  //     this.selectedItems.splice(index, 1);
  //     this.selectedCategories.splice(index, 1);
  //   }
  // }

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



  confirm() {
    const dto = {
      _id: this.responseData._id,
      status: 'APPROVED'
    }

    this.productService.putAnalisysProduct(dto._id, dto.status, dto).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
        this.toastrService.success('Aprovado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao aprovar', '', { progressBar: true });
      }
    )
  }

  refused() {
    this.modalService.dismissAll();
    const dto = {
      _id: this.responseData._id,
      status: 'DENIED'
    }
    this.productService.putAnalisysProduct(dto._id, dto.status, dto).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
        this.toastrService.success('Recusado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao recusar', '', { progressBar: true });
      }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }
}
