import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from 'src/app/interface/profile.interface';
import { DatamockService } from 'src/services/datamock.service';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
userprofile:ProfileInterface[];
  constructor(
    private datamockService:DatamockService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.userprofile=this.datamockService.getprofile();
  }
  criateUserPasswordModal(){
    this.modalService.open(UserPasswordComponent,{centered:true,backdrop:'static',keyboard:false})
  }
}
