import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierCustomersPutRequestDto } from 'src/app/dto/logged/supplier-customers-put-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-supplier-customers-client',
  templateUrl: './edit-supplier-customers-client.component.html',
  styleUrls: ['./edit-supplier-customers-client.component.scss']
})
export class EditSupplierCustomersClientComponent implements OnInit {
  form: FormGroup;
  request: SupplierCustomersPutRequestDto;
  selectFile: any = [];
  selectFileName: string;
  responseData: any;
  FilesDoc: string;
  truephone: string;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cpf: [''],
      phone: [''],
      email: [''],
      supplier: [''],
      image: ['']
    })
  }

  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.FilesDoc = this.responseData.doc;
    this.form.controls['name'].setValue(this.responseData.name);
    this.form.controls['cpf'].setValue(this.responseData.cpf);
    this.form.controls['phone'].setValue(this.responseData.phone);
    this.form.controls['email'].setValue(this.responseData.email);
    console.log(this.FilesDoc, this.form.controls['phone'].value);
    if (this.form.controls['phone'].value) console.log('tem')
    else console.log('não')
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = this.responseData.document;
    link.download = `documento-de-solicitação-${this.responseData.name}`; // set the file name here
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  exit() {
    this.modalService.dismissAll()
  }

  confirm() {
    if (this.form.controls['phone'].value === undefined || this.form.controls['phone'].value === '') this.truephone = '';
    else if (this.form.controls['phone'].value) this.truephone = this.form.controls['phone'].value;
    else this.truephone = `+55${this.form.controls['phone'].value}`;
    this.request = {
      phone: this.truephone,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      cpf: this.form.controls['cpf'].value,
      status: 'active',
    }
    console.log(this.request)
    this.userService.updateSupplierCustomers(this.responseData._id, this.request).subscribe(
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
}
