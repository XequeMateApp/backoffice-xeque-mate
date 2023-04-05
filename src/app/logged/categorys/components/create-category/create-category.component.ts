import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryRequestDto } from 'src/app/dto/logged/category-register-request.dto';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  @ViewChild('createname') createname: ElementRef;
  @ViewChild('createstatus') createstatus: ElementRef;
  @ViewChild('createdescription') createdescription: ElementRef;
  @ViewChild('createimg') createimg: ElementRef;

  request: CategoryRequestDto;
  form: FormGroup;
  notImage = true;
  selectFile: any = [];

  alertFieldsName = false;
  alertFieldsStatus = false;
  alertFieldsDescription = false;
  alertFieldsImg = false;

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
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.form.controls['image'].setValue(fileReader.result.toString());
    };


    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.selectFile = [];
          this.selectFile.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  verifiField() {
    if (this.form.controls['name'].value === '') {
      this.createname.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsName = true;
      setInterval(() => {
        this.createname.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsName = false;
      }, 3000);
    }
    else if (this.form.controls['status'].value === '') {
      this.createstatus.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsStatus = true;
      setInterval(() => {
        this.createstatus.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsStatus = false;
      }, 3000);
    }
    else if (this.form.controls['description'].value === '') {
      this.createdescription.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsDescription = true;
      setInterval(() => {
        this.createdescription.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsDescription = false;
      }, 3000);
    }
    else if (this.form.controls['image'].value === '') {
      this.createimg.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsImg = true;
      setInterval(() => {
        this.createimg.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsImg = false;
      }, 3000);
    }
  }


  confirm() {
    this.verifiField();
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      image: this.form.controls['image'].value,
      description: this.form.controls['description'].value,
    }
    console.log(this.request)
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['status'].value !== '' &&
      this.form.controls['image'].value !== '' &&
      this.form.controls['description'].value !== ''
    ) {
      this.categoryServer.register(this.request).subscribe(
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
  }


  exit() {
    this.modalService.dismissAll()
  }


}
