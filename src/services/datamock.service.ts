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
      _id: 1,
      name: 'Abraham linkon',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 2,
      name: 'Brad Pit',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 3,
      name: 'Katy Pary',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      _id: 4,
      name: 'Vin Disel',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      _id: 5,
      name: 'Drake',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      _id: 6,
      name: 'Travis Scots',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Inativo'
    },
    {
      _id: 7,
      name: 'Avril Lavine',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 8,
      name: 'Ana maria braga',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 9,
      name: 'Faustão',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 10,
      name: 'Al abduh jaba mohamed mia khalifa',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 11,
      name: 'Bolsonaro',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 12,
      name: 'Putin',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },
    {
      _id: 13,
      name: 'Donald trump',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '00:00 pm',
      filter: '..',
      status: 'Ativo'
    },

  ];
  supplier:SupplierInterface[] = [
    {
      _id: 1,
      name: 'Abraham linkon Abraham linkon Abraham linkonAbraham linkonAbraham linkonAbraham linkonAbraham linkon',
      email: 'exemplo@xequematervqwetbbqgbeedewfrebrbqeebrtbwrtre.com',
      cnpj: '42788247000164',
      permition: 'Permição BBBBBBBBBBBB',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      _id: 2,
      name: 'Brad Pit',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição BBBBBBBBBBBB',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      _id: 3,
      name: 'Katy Pary',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição BBBBBBBBBBBB',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      _id: 4,
      name: 'Vin Disel',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição BBBBBBBBBBBB',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      _id: 5,
      name: 'Drake',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'Função A',
      status: 'Ativo'
    },
    {
      _id: 6,
      name: 'Travis Scots',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Fornecedor',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      _id: 7,
      name: 'Avril Lavine',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'Função A',
      status: 'Inativo'
    },
    {
      _id: 8,
      name: 'Ana maria braga',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'Função A',
      status: 'Inativo'
    },
    {
      _id: 9,
      name: 'Faustão',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      _id: 10,
      name: 'Al abduh jaba mohamed mia khalifa',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      _id: 11,
      name: 'Bolsonaro',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      _id: 12,
      name: 'Putin',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },
    {
      _id: 13,
      name: 'Donald trump',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      permition: 'Permição AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      date: '25122001',
      category: 'Material de construçãooooooooooooooooooooooooooooooooooooooooooooooooooo',
      material: 'madeira arararararararararararar',
      price: '1499349374783939484',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'Função A',
    },

  ];
}
