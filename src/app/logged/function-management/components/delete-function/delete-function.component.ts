import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RoleDeleteRequestDto } from 'src/app/dto/logged/role-delete-request.dto';
import { RoleRegisterRequestDto } from 'src/app/dto/logged/role-register-request.dto';
import { RoleService } from 'src/services/role.service';

@Component({
  selector: 'app-delete-function',
  templateUrl: './delete-function.component.html',
  styleUrls: ['./delete-function.component.scss']
})
export class DeleteFunctionComponent implements OnInit {
  form: FormGroup;
  productsData: any;
  responseData: any;

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.form.controls['delete'].setValue(this.responseData._id)
  }
  exit() {
    this.modalService.dismissAll()
  }
  delete() {
    let request: RoleDeleteRequestDto = {
      _id: this.responseData._id
    }
    console.log(request)
    this.roleService.deleteRoles(this.responseData._id, request).subscribe({
      next: data => {
        window.location.reload();
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
        this.exit();
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    }
    )
  }
}
