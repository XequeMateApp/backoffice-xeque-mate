import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc-manager',
  templateUrl: './kyc-manager.component.html',
  styleUrls: ['./kyc-manager.component.scss']
})
export class KycManagerComponent implements OnInit {

  array = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
