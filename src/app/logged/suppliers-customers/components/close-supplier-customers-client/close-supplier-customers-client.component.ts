import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-close-supplier-customers-client',
  templateUrl: './close-supplier-customers-client.component.html',
  styleUrls: ['./close-supplier-customers-client.component.scss']
})
export class CloseSupplierCustomersClientComponent implements OnInit {
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
        setTimeout(() => {
          window.location.reload();
        }, 200)
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
