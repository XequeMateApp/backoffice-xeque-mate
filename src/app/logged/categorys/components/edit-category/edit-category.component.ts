import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryRequestDto } from 'src/app/dto/logged/category-register-request.dto';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {


  request: CategoryRequestDto;

  form: FormGroup;
  notImage = true;
  selectFile: any = [];
  responseData: any;
  editStatus: string;
  supplierImg: string[];
  selectedImageUrl: string;
  addImg: true;


  constructor(
    private modalService: NgbModal,
    private categoryServer: CategoryService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      description: [''],
      image: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.form.controls['name'].setValue(this.responseData.name);
    this.form.controls['description'].setValue(this.responseData.description);
    this.editStatus = this.responseData.status;
    this.supplierImg = this.responseData.image;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.supplierImg = [];
          this.responseData.image = this.supplierImg.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  confirm() {
    if(this.form.controls['status'].value == ''){
      this.form.controls['status'].setValue(this.responseData.status)
    }
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      image: String(this.supplierImg),
      description: this.form.controls['description'].value,
    }
    console.log(this.request)
      this.categoryServer.editCategory(this.responseData._id, this.request).subscribe(
        success => {
          this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
          this.modalService.dismissAll();
        },
        error => {
          console.log(error)
          this.toastrService.error('Erro ao Editar', '', { progressBar: true });
        }
      )
    }
  exit() {
    this.modalService.dismissAll()
  }
}
