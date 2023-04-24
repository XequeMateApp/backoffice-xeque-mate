import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleRegisterRequestDto } from 'src/app/dto/logged/role-register-request.dto';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { RoleService } from 'src/services/role.service';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.scss']
})
export class EditFunctionComponent implements OnInit {
  form: FormGroup;
  responseData: any;
  editStatus: string;
  checked: string;
  request: RoleRegisterRequestDto;
  response: RoleResponseDto;
  role: string;
  formValues: any;
  roleArray: string[];
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      administrator: [''],
      user: [''],
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
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.getRoleId();
    this.editStatus = this.responseData.status;
    this.form.controls['name'].setValue(this.responseData.name)
  }

  getRoleId() {
    this.roleService.getRoleId(this.responseData._id).subscribe({
      next: success => {
        this.response = success;
        const role = this.response.roles.join(' ');
        this.response.roles.forEach(role => {
          if (role === 'administrator') this.form.controls['administrator'].setValue('administrator');
          if (role === 'products') this.form.controls['products'].setValue('products');
          if (role === 'kyc') this.form.controls['kyc'].setValue('kyc');
          if (role === 'customers') this.form.controls['customers'].setValue('customers');
          if (role === 'accesscontrol') this.form.controls['accesscontrol'].setValue('accesscontrol');
          if (role === 'notifications') this.form.controls['notifications'].setValue('notifications');
          if (role === 'marketing') this.form.controls['marketing'].setValue('marketing');
          if (role === 'category') this.form.controls['category'].setValue('category');
          if (role === 'user') this.form.controls['user'].setValue('user');
        });
      },
      error: error => { console.error(error, 'data not collected') }
    })
  }


  transformFunctions() {
    if (this.form.controls['administrator'].value === true ||  this.form.controls['administrator'].value === 'administrator') this.form.controls['administrator'].setValue('administrator'); else this.form.controls['administrator'].setValue('')
    if (this.form.controls['products'].value === true || this.form.controls['products'].value === 'products' ) this.form.controls['products'].setValue('products'); else this.form.controls['products'].setValue('');
    if (this.form.controls['kyc'].value === true || this.form.controls['kyc'].value === 'kyc' ) this.form.controls['kyc'].setValue('kyc'); else this.form.controls['kyc'].setValue('');
    if (this.form.controls['customers'].value === true || this.form.controls['customers'].value === 'customers') this.form.controls['customers'].setValue('customers'); else this.form.controls['customers'].setValue('');
    if (this.form.controls['accesscontrol'].value === true || this.form.controls['accesscontrol'].value === 'accesscontrol') this.form.controls['accesscontrol'].setValue('accesscontrol'); else this.form.controls['accesscontrol'].setValue('');
    if (this.form.controls['notifications'].value === true || this.form.controls['notifications'].value === 'notifications' ) this.form.controls['notifications'].setValue('notifications'); else this.form.controls['notifications'].setValue('');
    if (this.form.controls['marketing'].value === true || this.form.controls['marketing'].value === 'marketing' ) this.form.controls['marketing'].setValue('marketing'); else this.form.controls['marketing'].setValue('');
    if (this.form.controls['category'].value === true || this.form.controls['category'].value === 'category') this.form.controls['category'].setValue('category'); else this.form.controls['category'].setValue('');
    if (this.form.controls['user'].value === true || this.form.controls['user'].value === 'user') this.form.controls['user'].setValue('user'); else this.form.controls['user'].setValue('');

    console.log(this.form.controls['notifications'].value, this.form.controls['administrator'].value )
    const { name, status, ...rest } = this.form.value;
     this.roleArray = [];
    for (const key in rest) {
      if (rest.hasOwnProperty(key) && rest[key] !== '') {
        this.roleArray.push(rest[key]);
      }
    }
      console.log('Valores unidos:',typeof this.roleArray);
  }



  confirm() {
    this.transformFunctions();
    if (this.form.controls['status'].value == '') {
      this.form.controls['status'].setValue(this.responseData.status)
    }
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      roles: this.roleArray,
    }
    console.log(this.request)
    this.roleService.editRoles(this.responseData._id, this.request).subscribe(
      success => {

        this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao editar!', '', { progressBar: true });
      }
    )
  }
  exit() {
    this.modalService.dismissAll()
  }
}
