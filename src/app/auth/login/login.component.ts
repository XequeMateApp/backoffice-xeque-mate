import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }
confirm(){
this.router.navigate(['auth/send-email'])
}
entrar(){
  this.router.navigate(['logged/dashboard'])
  }
}
