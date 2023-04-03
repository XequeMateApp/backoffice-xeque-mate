import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleRegisterRequestDto } from 'src/app/dto/logged/role-register-request.dto';
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
    this.responseData = JSON.parse(localStorage.getItem('responseData'));

    this.editStatus = this.responseData.status;
    if (this.responseData.administrator === 'active') this.form.controls['administrator'].setValue('administrator'); else this.form.controls['administrator'].setValue(false);
    if (this.responseData.products === 'active') this.form.controls['products'].setValue('products'); else this.form.controls['products'].setValue(false);
    if (this.responseData.kyc === 'active') this.form.controls['kyc'].setValue('kyc'); else this.form.controls['kyc'].setValue(false);
    if (this.responseData.customers === 'active') this.form.controls['customers'].setValue('customers'); else this.form.controls['customers'].setValue(false);
    if (this.responseData.accesscontrol === 'active') this.form.controls['accesscontrol'].setValue('accesscontrol'); else this.form.controls['accesscontrol'].setValue(false);
    if (this.responseData.notifications === 'active') this.form.controls['notifications'].setValue('notifications'); else this.form.controls['notifications'].setValue(false);
    this.form.controls['name'].setValue(this.responseData.name)
  }



  transformFunctions() {
    if (this.form.controls['administrator'].value !== false) this.form.controls['administrator'].setValue('active'); else this.form.controls['administrator'].setValue('inactive')
    if (this.form.controls['products'].value !== false) this.form.controls['products'].setValue('active'); else this.form.controls['products'].setValue('inactive');
    if (this.form.controls['kyc'].value !== false) this.form.controls['kyc'].setValue('active'); else this.form.controls['kyc'].setValue('inactive');
    if (this.form.controls['customers'].value !== false) this.form.controls['customers'].setValue('active'); else this.form.controls['customers'].setValue('inactive');
    if (this.form.controls['accesscontrol'].value !== false) this.form.controls['accesscontrol'].setValue('active'); else this.form.controls['accesscontrol'].setValue('inactive');
    if (this.form.controls['notifications'].value !== false) this.form.controls['notifications'].setValue('active'); else this.form.controls['notifications'].setValue('inactive');
  }



  confirm() {
    this.transformFunctions();
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
    console.log(this.request, this.responseData._id, this.form.controls['notifications'].value)
    this.roleService.editRoles(this.responseData._id, this.request).subscribe(
      success => {
        // mostar card dizendo tudo bem
        // window.location.reload();
        setTimeout(() => {
          window.location.reload();
          }, 2000)
        this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
        // função somir todos os modais
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
