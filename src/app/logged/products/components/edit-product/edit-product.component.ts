import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { ProductPutRequestDto } from 'src/app/dto/logged/product-put-request.dto';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;

  request: ProductPutRequestDto;

  selectFileName: String;
  supplierImg: string[];
  selectedItems: CategoryResponseDto[] = [];
  FileNameDoc: String;
  responseCategory: CategoryResponseDto[] = [];

  alertFieldCategory = false;
  responseData: any;

  selectedImageUrl: string;
  selectFile: any = [];
  notImage = true;
  FilesDoc: any;
  items: string[];
  selectedCategories: string[];

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      code: [''],
      selectCategory: [''],
      selectPhotos: [''],
      description: [''],
      specification: [''],
      price: [''],
      cnpj: [''],
      doc: [''],
    })
  }


  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.FilesDoc = this.responseData.doc;
    console.log(this.FilesDoc);
    console.log(this.responseData.category)
    // console.log(this.supplierImg);
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['price'].setValue(this.responseData.value)
    this.form.controls['cnpj'].setValue(this.responseData.cnpj)
    this.form.controls['code'].setValue(Number(this.responseData.code))
    // this.form.controls['selectCategory'].setValue(this.responseData.category)
    this.form.controls['description'].setValue(this.responseData.description)
    this.form.controls['specification'].setValue(this.responseData.specifications)
    this.getImagesFromLocalStorage();
    this.getCategorys();
  }


  //FUNCTION-SELECTION
  getCategorys(){
    this.categoryService.getCategory().subscribe(
      success => {
        this.responseCategory = success;
        console.log(this.responseCategory)
      },
      error => { console.error(error, 'category not collected') }
    )
  }
  onOptionSelected(optionId: string) {
    const selectedOption = this.responseCategory.find(option => option._id === optionId);
    if (selectedOption && !this.selectedItems.includes(selectedOption)) {
      this.selectedItems.push(selectedOption);
    }
    this.selectedCategories = this.selectedItems.map(item => item.name);
    console.log(this.selectedCategories);
  }

  removeItem(item: CategoryResponseDto) {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
      this.selectedCategories.splice(index, 1);
    }
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


  getImagesFromLocalStorage() {
    const imagesData = JSON.parse(localStorage.getItem('responseData'));
    if (imagesData.image && Array.isArray(imagesData.image)) {
      this.supplierImg = imagesData.image;
    }
  }


  removeFile(index: number) {
    this.supplierImg.splice(index, 1);
    this.form.controls['selectPhotos'].setValue(null);
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

    this.request = {
        name: this.form.controls['name'].value,
        cnpj: this.form.controls['cnpj'].value,
        code: this.form.controls['code'].value,
        category: this.selectedCategories,
        image: this.supplierImg,
        description: this.form.controls['description'].value,
        specifications: this.form.controls['specification'].value,
        value: this.form.controls['price'].value,
    }
    console.log(this.request)
    this.productService.putProduct(this.responseData._id, this.request).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
        this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao editar', '', { progressBar: true });
      }
    )
  }


  exit() {
    this.modalService.dismissAll()
  }
}
