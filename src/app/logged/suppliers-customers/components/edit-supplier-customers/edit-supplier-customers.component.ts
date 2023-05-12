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
  emphasis: string;
   check: any

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
  
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpj: [''],
      phone: [''],
      email: [''],
      emphasis: [''],
      doc: [''],
    })
  }

  //645e395575913e9b2454f3e5
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.FilesDoc = this.responseData.doc;
    this.form.controls['name'].setValue(this.responseData.name);
    this.form.controls['cnpj'].setValue(this.responseData.cnpj);
    this.form.controls['phone'].setValue(this.responseData.phone);
    this.form.controls['email'].setValue(this.responseData.email);
    console.log('arquivo:', this.form.controls);
    if (this.form.controls['phone'].value) console.log('tem')
    else console.log('não')

    this.check = this.responseData.emphasis
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

  setEmphasis(value: any){
    const dto = {
      emphasis: value
    }

    // console.log('os dados que eu vou passar sao>', this.responseData.email, value)
    this.userService.changeEmphasis(this.responseData.email, dto).subscribe(
      success => {
        this.toastrService.success('Destaque do fornecedor alterado com sucesso!', '', { progressBar: true });
        //this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao editar', '', { progressBar: true });
      }
    )
  }

  confirm() {
    if (this.form.controls['emphasis'].value === true) this.emphasis = 'active';
    else this.emphasis = 'inactive';
    if (this.form.controls['phone'].value === undefined || this.form.controls['phone'].value === '') this.truephone = '';
    else if (this.form.controls['phone'].value) this.truephone = this.form.controls['phone'].value;
    else this.truephone = `+55${this.form.controls['phone'].value}`;

    this.request = {
      phone: this.truephone,
      email: this.form.controls['email'].value,
      name: this.form.controls['name'].value,
      cnpj: this.form.controls['cnpj'].value,
      status: 'active',
      hightlight: this.emphasis
    }
    console.log(this.request)
    this.userService.updateSupplierCustomersSupplier(this.responseData._id, this.request).subscribe(
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
