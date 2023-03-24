import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dropDatas = 'selecione'
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }
  changeDatas(value: string) {
    if (value === '7days') {
      this.dropDatas = '7 dias'
    } else if (value === '15days') {
      this.dropDatas = '15 dias'
    } else if (value === '1month') {
      this.dropDatas = '1 mês'
    }
  }
}
