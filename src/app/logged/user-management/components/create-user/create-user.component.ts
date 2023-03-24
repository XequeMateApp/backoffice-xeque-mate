import { Component, OnInit } from '@angular/core';
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
  form: FormGroup;
  request: UserRegisterRequestDto;
  productsData: any;
  editNotStatus: string;
  alertFields: boolean;
  alertFieldsName: boolean;
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
      funtions: ['', [Validators.required]],
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
    const fieldName = document.getElementById(
      '#create-name'
    ) as HTMLElement;
    const fieldEmail = document.getElementById(
      '#create-email'
    ) as HTMLElement;
    const fieldPhone = document.getElementById(
      '#create-phone'
    ) as HTMLElement;
    const fieldStatus = document.getElementById(
      '#create-status'
    ) as HTMLElement;
    if (this.form.controls['name'].value === '') {
      fieldName.classList.add("border-danger", "text-danger");
      this.alertFieldsName = true;
      setInterval(() => {
        fieldName.classList.remove("border-danger", "text-danger");
        this.alertFields = false;
      }, 2000);
    }
  }

  confirm(): void {
    this.verifiField();
    this.request = {
      // phone: `+55${this.form.controls['phone'].value.replace(/\D/g, '')}`,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      password: 'string',
      kyc: 'PENDING'
    }
    console.log(this.request)
    // this.userService.register(this.request).subscribe(
    //   success => {
    //     this.userService.modalRegisterForm = null;
    //     this.toastrService.success('Cadastrado com sucesso!', '', { progressBar: true });
    //     this.modalService.dismissAll();
    //   },
    //   error => {
    //     console.log(error)
    //     this.toastrService.error('Erro ao cadastrar', '', { progressBar: true });
    //   }
    // )
  }
}

// função é permição
// trocar nome das funções em cadastrar função pelos nomes das telas que ele tem permição de entrar
