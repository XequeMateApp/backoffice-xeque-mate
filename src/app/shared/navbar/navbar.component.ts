import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string;
  user: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user !== null){
      this.userName = this.user.email;
    }
    console.log(this.userName);
  }
  logout() {
    this.router.navigate(['/'])
  }

}
