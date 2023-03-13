import { Injectable } from '@angular/core';
import { NotificIationnterface } from 'src/app/interface/notification.interface';
import { SupplierInterface } from 'src/app/interface/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class DatamockService {

  constructor() { }


  notificationList:NotificIationnterface[] = [
    {
      name: 'Abraham linkon',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Brad Pit',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Katy Pary',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      name: 'Vin Disel',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      name: 'Drake',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      name: 'Travis Scots',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      name: 'Avril Lavine',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Ana maria braga',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Faustão',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Al abduh jaba mohamed mia khalifa',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Bolsonaro',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Putin',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      name: 'Donald trump',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },

  ]

  supplier:SupplierInterface[] = [
    {
      name: 'Abraham linkon Abraham linkon',
      email: 'exemplo@xequematervqwetbbqgbeedewfrebrbqeebrtbwrtre.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      name: 'Brad Pit',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      name: 'Katy Pary',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      name: 'Vin Disel',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      name: 'Drake',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      name: 'Travis Scots',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Fornecedor',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      name: 'Avril Lavine',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'Função A',
      status: 'Inativo'
    },
    {
      name: 'Ana maria braga',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'Função A',
      status: 'Inativo'
    },
    {
      name: 'Faustão',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      name: 'Al abduh jaba mohamed mia khalifa',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      name: 'Bolsonaro',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      name: 'Putin',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      name: 'Donald trump',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      date: '25122001',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },

  ]


}
