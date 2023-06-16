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
  request: UserPutRequestDto;
  response: RoleResponseDto[] = [];
  checkboxValues: string[] = [];
  editphone: string;
  editStatus: string;
  filtername = 'filter'


  responseData: any;
  truephone: any;
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
    });

  }


  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.editStatus = this.responseData.status;
    this.form.controls['email'].setValue(this.responseData.email)
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['status'].setValue(this.responseData.status)
    this.editphone = this.responseData.phone;
    if (this.editphone.length > 3) this.editphone = this.editphone.slice(3);
    this.form.controls['phone'].setValue(this.editphone)
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRole().subscribe({
      next: success => {
        this.response = success;
      },
      error: error => { console.error(error, 'dados não coletados!!'); }
    });
  }


  updateCheckboxValues(itemId: string): void {
    const index = this.checkboxValues.indexOf(itemId);
    const checado = index !== -1;
    if (checado) {
        this.checkboxValues.splice(index, 1);
    } else {
        this.checkboxValues.push(itemId);
    }
    if (this.responseData?.roles.includes(itemId) && !checado) {
        this.responseData.roles = this.responseData.roles.filter(id => id !== itemId);
    }
    console.log(this.responseData.roles, this.checkboxValues);
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
      roles: this.responseData.roles.concat(this.checkboxValues),
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


