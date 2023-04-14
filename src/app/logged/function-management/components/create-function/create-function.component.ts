import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleRegisterRequestDto } from 'src/app/dto/logged/role-register-request.dto';
import { RoleService } from 'src/services/role.service';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.scss']
})
export class CreateFunctionComponent implements OnInit {
  @ViewChild('createname') createname: ElementRef;
  @ViewChild('createstatus') createstatus: ElementRef;
  @ViewChild('createfunction') createfunction: ElementRef;

  @ViewChild('administrator') administrator: ElementRef;
  @ViewChild('products') products: ElementRef;
  @ViewChild('kyc') kyc: ElementRef;
  @ViewChild('customers') customers: ElementRef;
  @ViewChild('accesscontrol') accesscontrol: ElementRef;
  @ViewChild('notifications') notifications: ElementRef;

  form: FormGroup;
  request: RoleRegisterRequestDto;

  alertFieldsName = false;
  alertFieldsStatus = false;
  alertFieldsFunctions = false;
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      administrator: [''],
      products: [''],
      kyc: [''],
      customers: [''],
      accesscontrol: [''],
      notifications: [''],
      status: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
  }


  exit() {
    this.modalService.dismissAll()
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
    else if (
      this.form.controls['administrator'].value === '' &&
      this.form.controls['products'].value === '' &&
      this.form.controls['kyc'].value === '' &&
      this.form.controls['customers'].value === '' &&
      this.form.controls['accesscontrol'].value === '' &&
      this.form.controls['notifications'].value === ''
    ) {
      this.createfunction.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsFunctions = true;
      setInterval(() => {
        this.createfunction.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsFunctions = false;
      }, 5000);
    }
  }



  verifiFieldFunctions() {
    if (this.form.controls['name'].value !== '' && this.form.controls['status'].value !== '') {
      if (this.form.controls['administrator'].value === true) this.form.controls['administrator'].setValue('active'); else this.form.controls['administrator'].setValue('inactive')
      if (this.form.controls['products'].value === true) this.form.controls['products'].setValue('active'); else this.form.controls['products'].setValue('inactive')
      if (this.form.controls['kyc'].value === true) this.form.controls['kyc'].setValue('active'); else this.form.controls['kyc'].setValue('inactive')
      if (this.form.controls['customers'].value === true) this.form.controls['customers'].setValue('active'); else this.form.controls['customers'].setValue('inactive')
      if (this.form.controls['accesscontrol'].value === true) this.form.controls['accesscontrol'].setValue('active'); else this.form.controls['accesscontrol'].setValue('inactive')
      if (this.form.controls['notifications'].value === true) this.form.controls['notifications'].setValue('active'); else this.form.controls['notifications'].setValue('inactive')
    }
  }

  confirm(): void {
    this.verifiField();
    console.log(this.form.controls['administrator'].value)
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['status'].value !== ''
    ) {
      this.verifiFieldFunctions();
      this.request = {
        name: this.form.controls['name'].value,
        status: this.form.controls['status'].value,
        administrator: this.form.controls['administrator'].value,
        products: this.form.controls['products'].value,
        kyc: this.form.controls['kyc'].value,
        customers: this.form.controls['customers'].value,
        accesscontrol: this.form.controls['accesscontrol'].value,
        notifications: this.form.controls['notifications'].value,
      }
      console.log(this.request)
      this.roleService.register(this.request).subscribe({
        next: success => {
          setTimeout(() => {
            window.location.reload();
          }, 200)
          this.toastrService.success('Cadastrado com sucesso!', '', { progressBar: true });
          this.modalService.dismissAll();
        },
        error: error => {
          console.log(error)
          this.toastrService.error('Erro ao cadastrar', '', { progressBar: true });
        }
      })
    }
  }
}
