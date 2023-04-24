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
  formValues: string[] = [];

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      administrator: [''],
      user: ['usuario'],
      products: [''],
      kyc: [''],
      customers: [''],
      accesscontrol: [''],
      marketing: [''],
      category: [''],
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
    else if (
      this.form.controls['administrator'].value === '' &&
      this.form.controls['products'].value === '' &&
      this.form.controls['kyc'].value === '' &&
      this.form.controls['customers'].value === '' &&
      this.form.controls['accesscontrol'].value === '' &&
      this.form.controls['marketing'].value === '' &&
      this.form.controls['category'].value === '' &&
      this.form.controls['notifications'].value === ''
    ) {
      this.createfunction.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsFunctions = true;
      setInterval(() => {
        this.createfunction.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsFunctions = false;
      }, 2000);
    }
  }



  verifiFieldFunctions() {
    if (this.form.controls['name'].value !== '' && this.form.controls['status'].value !== '') {
      if (this.form.controls['administrator'].value !== '') this.form.controls['administrator'].setValue('administrator'); else this.form.controls['administrator'].setValue('')
      if (this.form.controls['products'].value !== '') this.form.controls['products'].setValue('products'); else this.form.controls['products'].setValue('')
      if (this.form.controls['kyc'].value !== '') this.form.controls['kyc'].setValue('kyc'); else this.form.controls['kyc'].setValue('')
      if (this.form.controls['customers'].value !== '') this.form.controls['customers'].setValue('customers'); else this.form.controls['customers'].setValue('')
      if (this.form.controls['accesscontrol'].value !== '') this.form.controls['accesscontrol'].setValue('accesscontrol'); else this.form.controls['accesscontrol'].setValue('')
      if (this.form.controls['notifications'].value !== '') this.form.controls['notifications'].setValue('notifications'); else this.form.controls['notifications'].setValue('')
      if (this.form.controls['marketing'].value !== '') this.form.controls['marketing'].setValue('marketing'); else this.form.controls['marketing'].setValue('')
      if (this.form.controls['category'].value !== '') this.form.controls['category'].setValue('category'); else this.form.controls['category'].setValue('')
    }
      for (const controlName of Object.keys(this.form.controls)) {
        if (controlName !== 'name' && controlName !== 'status') {
          const control = this.form.controls[controlName];
          if (control.value !== '' &&  control.value !== null) {
            this.formValues.push(control.value);
          }
        }
      }
      console.log(this.formValues);


  }

  confirm(): void {
    // this.verifiField();
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['status'].value !== ''
    ) {
      this.verifiFieldFunctions();
      this.request = {
        name: this.form.controls['name'].value,
        status: this.form.controls['status'].value,
        roles: this.formValues,
      }
      console.log(this.request)
      this.roleService.register(this.request).subscribe({
        next: success => {
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
