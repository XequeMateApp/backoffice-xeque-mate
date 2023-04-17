import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierRegisterRequestDto } from 'src/app/dto/logged/supplier-register-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-validate-supplier',
  templateUrl: './validate-supplier.component.html',
  styleUrls: ['./validate-supplier.component.scss']
})
export class ValidateSupplierComponent implements OnInit {
  form: FormGroup;
  request: SupplierRegisterRequestDto;
  response: any;
  notImage = false;
  Image = true;
  supplierData: any;
  selectFile: any = [];
  selectFileName: String;
  constructor(
    private toastrService: ToastrService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      cnpj: [''],
      cpf: [''],
      contact: [''],
      email: [''],
      doc: [''],
      id: ['']
    })
  }
  ngOnInit(): void {
    this.response = JSON.parse(localStorage.getItem('responseData'));
    this.form.controls['name'].setValue(this.response.name);
    this.form.controls['cnpj'].setValue(this.response.cnpj);
    this.form.controls['cpf'].setValue(this.response.cpf);
    this.form.controls['email'].setValue(this.response.email);
    this.form.controls['id'].setValue(this.response._id);
  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {

    this.request = {
      status: 'active',
      _id: this.form.controls['id'].value
    }

    console.log(this.request)
    this.userService.updateUserPlataform(this.request._id, this.request.status, this.request).subscribe(
      success => {

        this.toastrService.success('Validado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao Validar', '', { progressBar: true });
      }
    )
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.selectFile = [];
          this.selectFile.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  onSelectFileName(event) {
    this.selectFileName = event.target.files[0].name;
  }

    downloadFile() {
      const link = document.createElement('a');
      link.href = this.response.document;
      link.download = `documento-de-solicitação-${this.response.name}`; // set the file name here
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
}
