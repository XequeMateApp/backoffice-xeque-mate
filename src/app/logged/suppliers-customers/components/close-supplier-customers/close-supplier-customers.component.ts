import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierRegisterRequestDto } from 'src/app/dto/logged/supplier-register-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-close-supplier-customers',
  templateUrl: './close-supplier-customers.component.html',
  styleUrls: ['./close-supplier-customers.component.scss']
})
export class CloseSupplierCustomersComponent implements OnInit {
  form: FormGroup;
  responseData: any;
  request: SupplierRegisterRequestDto;

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }

  delete() {

    this.request = {
      status: 'inactive',
      _id: this.responseData._id
    }

    console.log(this.request)
    this.userService.updateUserPlataform(this.responseData._id, this.request.status, this.request).subscribe(
      success => {

        this.toastrService.success('Fornecedor inativado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao Validar', '', { progressBar: true });
      }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }
}
