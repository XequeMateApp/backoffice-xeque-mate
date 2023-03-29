import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterRequestDto } from 'src/app/dto/logged/user.register-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('createname') createname: ElementRef;
  @ViewChild('createemail') createemail: ElementRef;
  @ViewChild('createstatus') createstatus: ElementRef;
  @ViewChild('createfilter') createfilter: ElementRef;

  form: FormGroup;
  request: UserRegisterRequestDto;
  productsData: any;
  editNotStatus: string;
  alertFieldsName = false;
  alertFieldsEmail = false;
  alertFieldsStatus = false;
  alertFieldsFilter = false;
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      filter: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
  }

  exit() {
    this.userService.modalRegisterForm = null;
    this.modalService.dismissAll();
  }

  verifiField() {
    if (this.form.controls['name'].value === '') {
      this.createname.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsName = true;
      setInterval(() => {
        this.createname.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsName = false;
      }, 5000);
    }
    else if (this.form.controls['email'].value === '') {
      this.createemail.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsEmail = true;
      setInterval(() => {
        this.createemail.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsEmail = false;
      }, 5000);
    }
    else if (this.form.controls['status'].value === '') {
      this.createstatus.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsStatus = true;
      setInterval(() => {
        this.createstatus.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsStatus = false;
      }, 5000);
    }
    else if (this.form.controls['filter'].value === '') {
      this.createfilter.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsFilter = true;
      setInterval(() => {
        this.createfilter.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsFilter = false;
      }, 5000);
    }
  }

  confirm(): void {
    this.verifiField();
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['email'].value !== '' &&
      this.form.controls['status'].value !== '' &&
      this.form.controls['filter'].value !== ''
    ) {
      this.request = {
        phone: `+55${this.form.controls['phone'].value.replace(/\D/g, '')}`,
        email: this.form.controls['email'].value,
        name: this.form.controls['name'].value,
        status: this.form.controls['status'].value,
        filter: this.form.controls['filter'].value,
        password: 'string',
      }
      console.log(this.request)
      this.userService.register(this.request).subscribe(
        success => {
          window.location.reload();
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
}
