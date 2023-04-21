import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { UserPutRequestDto } from 'src/app/dto/logged/user-put-request.dto';
import { RoleService } from 'src/services/role.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  responseData: any;
  editStatus: string;
  filtername = 'filter'
  request: UserPutRequestDto;
  response: RoleResponseDto[] = [];
  checked: string;
  truephone: any;
  editphone: string;
  rolesId: any;
  arrayRole: string[];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      status: ['', [Validators.required]],
      phone: [''],
      roles: [''],
    });

  }


  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.editStatus = this.responseData.status;
    this.form.controls['email'].setValue(this.responseData.email)
    this.form.controls['status'].setValue(this.responseData.status)
      this.editphone = this.responseData.phone;
    if (this.editphone.length > 3) this.editphone = this.editphone.slice(3);
    this.form.controls['phone'].setValue(this.editphone)
    this.getRoles();
    // this.form.controls['roles'][0].setValue(true)
  }


  getRoles() {
    this.roleService.getRole().subscribe({
      next: success => {
        this.response = success;
        console.log(this.response);
      },
      error: error => { console.error(error, 'data not collected'); }
    });
  }




  rolePermition(value: string): void {
    if (value && this.rolesId.indexOf(value) === -1) {
      this.rolesId.push(value);
    }
    this.arrayRole = ([] as string[]).concat(...this.rolesId);
    console.log(this.arrayRole);
    this.form.controls['roleFake'].setValue('fake')
  }


  confirm() {
    console.log(this.form.controls['phone'].value, ' tipo ofi')
    if (this.form.controls['phone'].value === undefined || this.form.controls['phone'].value === '') this.truephone = '';
    else this.truephone = `+55${this.form.controls['phone'].value}`;
    this.request = {
      phone: this.truephone,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      roles: this.form.controls['filter'].value,
    }
    console.log(this.request)
    this.userService.editUsers(this.responseData._id, this.request).subscribe(
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


