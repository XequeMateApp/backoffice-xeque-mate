import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserDeleteRequestDto } from 'src/app/dto/logged/user-delete-request.dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-confir-user',
  templateUrl: './confir-user.component.html',
  styleUrls: ['./confir-user.component.scss']
})
export class ConfirUserComponent implements OnInit {
  responseData: any;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService,
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
<<<<<<< Updated upstream
    this.request = {
      _id: this.responseData._id
    }
    console.log(this.request)
    this.userService.deleteUsers(this.responseData._id).subscribe(
      success => {
        window.location.reload();
        this.modalService.dismissAll();
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true });
=======
    let request: UserDeleteRequestDto = {
      _id: this.responseData._id
    }
    console.log(request)
    this.userService.deleteUsers(this.responseData._id, request).subscribe({
      next: data => {
        window.location.reload();
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
        this.exit();
>>>>>>> Stashed changes
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    }
    )
  }

}
