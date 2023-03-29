import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  request: UserDeleteRequestDto;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }
  exit() {
    this.modalService.dismissAll()
  }
  delete() {
    // let requestDTO = {
    //   id: this.responseData._id
    // }
    // this.request = {
    //   _id: this.responseData._id
    // }
    console.log(this.request)
    this.userService.deleteUsers(this.responseData._id).subscribe(
      success => {
        window.location.reload();
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    )
  }

}
