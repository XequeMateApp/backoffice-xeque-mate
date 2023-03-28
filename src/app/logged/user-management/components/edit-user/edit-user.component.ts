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
  productsData: any;
  editNotStatus: string;
  filtername = 'filter'
  request: UserPutRequestDto;
  checked: string;
  truephone: any;
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private formBuilder: FormBuilder,
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
    this.productsData = JSON.parse(localStorage.getItem('productsData'));
    this.editNotStatus = this.productsData.status;
    if (this.productsData.filter === 'Administrador') this.productsData.filter = 'ADMINISTRATOR';
    else if (this.productsData.filter === 'Produto') this.productsData.filter = 'PRODUCTS';
    else if (this.productsData.filter === 'Kyc') this.productsData.filter = 'KYC';
    else if (this.productsData.filter === 'Cliente') this.productsData.filter = 'CUSTOMERS';
    else if (this.productsData.filter === 'Controle de acesso') this.productsData.filter = 'ACCESCONTROL';
    else if (this.productsData.filter === 'Notificações') this.productsData.filter = 'NOTIFICATIONS';
    this.form.controls['name'].setValue(this.productsData.name)
    this.form.controls['email'].setValue(this.productsData.email)
    this.form.controls['status'].setValue(this.productsData.status)
    this.form.controls['phone'].setValue(this.productsData.phone)
    this.checked = this.productsData.filter;
    this.form.patchValue({ filter: this.productsData.filter });
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
    this.userService.editUsers(this.productsData._id, this.request).subscribe(
      success => {
        // mostar card dizendo tudo bem
        window.location.reload();
        this.toastrService.success('DEU BOM!', '', { progressBar: true });
        // função somir todos os modais
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('DEU RUIM!!!!!', '', { progressBar: true });
      }
    )
  }
}
