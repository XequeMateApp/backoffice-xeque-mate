import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierInterface } from 'src/app/interface/supplier.interface';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  form: FormGroup;
  notImage = true;
  selectFile: any = [];
  supplier: SupplierInterface[];
  productsData: any;
  editStatus: string;
  supplierImg: string[];
  selectedImageUrl: string;
addImg: true;


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      description: [''],
      img: [''],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.form.controls['name'].setValue(this.productsData.name);
    this.form.controls['description'].setValue(this.productsData.description);
    this.editStatus = this.productsData.status;
    this.supplierImg = this.productsData.imgcategory;
    if (this.supplierImg.length === 0) {
      this.supplierImg = null;
    }
    console.log(this.supplierImg);

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
          this.supplierImg = [];
          this.supplierImg.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  // onSelectFileProductImage(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     this.notImage = false;
  //     var filesAmount = event.target.files.length;
  //     for (let i = 0; i < filesAmount; i++) {
  //       var reader = new FileReader();
  //       reader.onload = (event: any) => {
  //         this.supplierImg.push(event.target.result as string);
  //       };
  //       reader.readAsDataURL(event.target.files[i]);
  //     }
  //   }
  // }

  // addImages() {
  //   this.supplier.push()
  // }

  // removeFile(index: number) {
  //   this.supplierImg.splice(index, 1);
  //   console.log('ué')
  //   this.form.controls['selectPhotos'].setValue(null);
  //   // this.selectFile = null;
  //   this.notImage = true;
  //   this.selectedImageUrl = '';
  // }
}
