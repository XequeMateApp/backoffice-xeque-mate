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
    if (this.userService.modalRegisterForm){
      this.form.patchValue({
        phone: this.userService.modalRegisterForm.phone,
        email: this.userService.modalRegisterForm.email,
        status: this.userService.modalRegisterForm.status,
        name: this.userService.modalRegisterForm.name,
        // funtions: this.userService.modalRegisterForm.funtions,
      })
    }
  }


  exit() {
    this.userService.modalRegisterForm = null;
    this.modalService.dismissAll();
  }


  confirm(): void {

    this.request = {
      phone: `+55${this.form.controls['phone'].value.replace(/\D/g, '')}`,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      kyc: ''
    }
    console.log(this.request)
    this.userService.register(this.request).subscribe(
      success => {
        this.userService.modalRegisterForm = null;
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
