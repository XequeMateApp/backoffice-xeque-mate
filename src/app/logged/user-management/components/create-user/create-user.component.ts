import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { UserRegisterRequestDto } from 'src/app/dto/logged/user.register-request.dto';
import { RoleService } from 'src/services/role.service';
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
  @ViewChild('createroleFake') createroleFake: ElementRef;


  form: FormGroup;
  response: RoleResponseDto[] = [];
  formValues: string[] = [];
  request: UserRegisterRequestDto;
  productsData: any;
  editNotStatus: string;
  alertFieldsName = false;
  alertFieldsEmail = false;
  alertFieldsStatus = false;
  alertFieldsroleFake = false;
  truephone: string;
  rolesId: string[] = [];
  checked = false;
  arrayRole: string[];

  constructor(
    private modalService: NgbModal,
    private roleService: RoleService,
    private toastrService: ToastrService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      status: [''],
      phone: [''],
      roleFake: ['']
    })
  }
  ngOnInit(): void {
    this.getRoles();
  }

  rolePermition(value: string): void {
    if (value && this.rolesId.indexOf(value) === -1) {
      this.rolesId.push(value);
    }
    this.arrayRole = ([] as string[]).concat(...this.rolesId);
    console.log(this.arrayRole);
    this.form.controls['roleFake'].setValue('fake')
  }


  getRoles() {
    this.roleService.getRole().subscribe({
      next: success => {
        this.response = success;
      },
      error: error => { console.error(error, 'dados não coletados!!'); }
    });
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
      }, 2000);
    }
    else if (this.form.controls['email'].value === '') {
      this.createemail.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsEmail = true;
      setInterval(() => {
        this.createemail.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsEmail = false;
      }, 2000);
    }
    else if (this.form.controls['status'].value === '') {
      this.createstatus.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsStatus = true;
      setInterval(() => {
        this.createstatus.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsStatus = false;
      }, 2000);
    }
    else if (this.form.controls['roleFake'].value === '') {
      this.createroleFake.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsroleFake = true;
      setInterval(() => {
        this.createroleFake.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsroleFake = false;
      }, 2000);
    }
  }

  confirm(): void {
    this.verifiField();
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['email'].value !== '' &&
      this.form.controls['status'].value !== '' &&
      this.form.controls['roleFake'].value !== ''
    ) {
      if (this.form.controls['phone'].value !== '') this.truephone = `+55${this.form.controls['phone'].value.replace(/\D/g, '')}`; else this.truephone = '';
      this.request = {
        phone: this.truephone,
        email: this.form.controls['email'].value,
        name: this.form.controls['name'].value,
        status: this.form.controls['status'].value,
        roles: this.rolesId,
        password: 'string',
      }
      console.log(this.request)
      this.userService.register(this.request).subscribe(
        success => {

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
