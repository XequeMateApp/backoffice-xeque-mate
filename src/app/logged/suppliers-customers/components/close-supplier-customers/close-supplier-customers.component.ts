import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-close-supplier-customers',
  templateUrl: './close-supplier-customers.component.html',
  styleUrls: ['./close-supplier-customers.component.scss']
})
export class CloseSupplierCustomersComponent implements OnInit {
  form: FormGroup;
  responseData: any;

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
    this.userService.deleteSupplierCustomers(this.responseData._id).subscribe({
      next: data => {
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
        this.modalService.dismissAll()
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }
}
