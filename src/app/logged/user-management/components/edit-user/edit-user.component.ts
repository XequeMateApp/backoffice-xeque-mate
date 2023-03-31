import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserPutRequestDto } from 'src/app/dto/logged/user-put-request.dto';
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
  checked: string;
  truephone: any;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      status: ['', [Validators.required]],
      phone: [''],
      filter: ['', [Validators.required]],
    });

  }


  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.editStatus = this.responseData.status;
    if (this.responseData.filter === 'Administrador') this.responseData.filter = 'ADMINISTRATOR';
    else if (this.responseData.filter === 'Produto') this.responseData.filter = 'PRODUCTS';
    else if (this.responseData.filter === 'Kyc') this.responseData.filter = 'KYC';
    else if (this.responseData.filter === 'Cliente') this.responseData.filter = 'CUSTOMERS';
    else if (this.responseData.filter === 'Controle de acesso') this.responseData.filter = 'ACCESCONTROL';
    else if (this.responseData.filter === 'Notificações') this.responseData.filter = 'NOTIFICATIONS';
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['email'].setValue(this.responseData.email)
    this.form.controls['status'].setValue(this.responseData.status)
    this.form.controls['phone'].setValue(this.responseData.phone)
    this.checked = this.responseData.filter;
    this.form.patchValue({ filter: this.responseData.filter });
    console.log(this.checked)
  }


  exit() {
    this.modalService.dismissAll()
  }


  confirm() {
    console.log(this.form.controls['phone'].value, ' tipo ofi')
    if (this.form.controls['phone'].value === undefined) this.truephone = '';
    else this.truephone = `+55${this.form.controls['phone'].value}`;
    this.request = {
      phone: this.truephone,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      filter: this.form.controls['filter'].value,
    }
    console.log(this.request)
    this.userService.editUsers(this.responseData._id, this.request).subscribe(
      success => {
        // mostar card dizendo tudo bem
        window.location.reload();
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
}
