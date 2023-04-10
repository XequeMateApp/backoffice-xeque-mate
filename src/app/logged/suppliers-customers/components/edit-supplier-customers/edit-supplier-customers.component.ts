import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierCustomersSuppliersPutRequesttDto } from 'src/app/dto/logged/supplier-costumers-suppliers-put-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-supplier-customers',
  templateUrl: './edit-supplier-customers.component.html',
  styleUrls: ['./edit-supplier-customers.component.scss']
})
export class EditSupplierCustomersComponent implements OnInit {
  form: FormGroup;
  request: SupplierCustomersSuppliersPutRequesttDto;
  selectFile: any = [];
  selectFileName: string;
  responseData: any;
  FilesDoc: any;
  truephone: string;
  trueimg: string;
  emphasis: string;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpj: [''],
      contact: [''],
      email: [''],
      supplier: [''],
      doc: [''],

    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.FilesDoc = this.responseData.doc;
    this.form.controls['name'].setValue(this.responseData.name);
    this.form.controls['cnpj'].setValue(this.responseData.cnpj);
    this.form.controls['phone'].setValue(this.responseData.phone);
    this.form.controls['email'].setValue(this.responseData.email);
    console.log(this.FilesDoc, this.form.controls['phone'].value);
    if (this.form.controls['phone'].value) console.log('tem')
    else console.log('não')
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'data:application/png;base64,' + btoa(this.FilesDoc);
    link.download = `document-${this.responseData.name}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  exit() {
    this.modalService.dismissAll()
  }

  confirm() {

    // tratament photo
    if (this.form.controls['phone'].value === undefined) this.truephone = '';
    else if (this.form.controls['phone'].value) this.truephone = this.form.controls['phone'].value;
    else this.truephone = `+55${this.form.controls['phone'].value}`;

    // tratament image
    if (this.form.controls['image'].value === undefined) this.trueimg = '';
    else if (this.form.controls['image'].value) this.trueimg = this.form.controls['phone'].value;

    this.request = {
      phone: this.truephone,
      email: this.form.controls['email'].value,
      image: this.trueimg,
      name: this.form.controls['name'].value,
      cnpj: this.form.controls['cnpj'].value,
      status: 'active',
      hightlight: this.emphasis
    }
    console.log(this.request)
    this.userService.updateSupplierCustomersSupplier(this.responseData._id, this.request).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
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
