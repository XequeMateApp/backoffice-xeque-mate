import { Component, OnInit } from '@angular/core';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  response: any;
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(
      async success => {
        this.response = success;
        console.log(this.response);
      },
      async error => {
        this.toastrService.error('Seus dados não foram recuperados!', '', { progressBar: true });
      }
    );
  }

  criateUserPasswordModal() {
    const modal = this.modalService.open(UserPasswordComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getUserInfo();
    })
  }


}
