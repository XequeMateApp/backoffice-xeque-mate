import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc-manager',
  templateUrl: './kyc-manager.component.html',
  styleUrls: ['./kyc-manager.component.scss']
})
export class KycManagerComponent implements OnInit {

  kycInformations = [
    {
      name: 'José Feliz Felix',
      email: 'Jose@email.com',
      cnpj: '000000000000',
      date: '00/00/0000',
      verification: 'Verificar'
    },
    {
      name: 'José Feliz Felix',
      email: 'Jose@email.com',
      cnpj: '000000000000',
      date: '00/00/0000',
      verification: 'Verificar'
    },
    {
      name: 'José Feliz Felix',
      email: 'Jose@email.com',
      cnpj: '000000000000',
      date: '00/00/0000',
      verification: 'Verificar'
    },
    {
      name: 'José Feliz Felix',
      email: 'Jose@email.com',
      cnpj: '000000000000',
      date: '00/00/0000',
      verification: 'Verificar'
    },
    {
      name: 'José Feliz Felix',
      email: 'Jose@email.com',
      cnpj: '000000000000',
      date: '00/00/0000',
      verification: 'Verificar'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
