import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  exit() {
    this.router.navigate(['/logged/dashboard']);
    this.modalService.dismissAll()
  }
}
