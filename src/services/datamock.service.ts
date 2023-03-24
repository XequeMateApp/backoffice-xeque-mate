import { Injectable } from '@angular/core';
import { NotificationInterface } from 'src/app/interface/notification.interface';
import { ProfileInterface } from 'src/app/interface/profile.interface';
import { SupplierInterface } from 'src/app/interface/supplier.interface';
@Injectable({
  providedIn: 'root'
})
export class DatamockService {

  notificationList: NotificationInterface[] = [
    {
      _id: 1,
      name: 'Abraham linkon',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '13:23:02',
      filter: '..',
      imgmarketing:'../../../../../assets/images/P1.png',
      repetition: 'diary',
      function: 'client',
      startIn: '2014-02-09',
      status: 'Ativo'
    },
    {
      _id: 2,
      name: 'Brad Pit',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '13:23:02',
      filter: '..',
      imgmarketing:'../../../../../assets/images/P2.png',
      repetition: 'diary',
      function: 'client',
      startIn: '2014-02-09',
      status: 'Ativo'
    },
    {
      _id: 3,
      name: 'Katy Pary',
      content: 't is a long established fact that a reader will be distracted by the readable',
      time: '13:23:02',
      filter: '..',
      imgmarketing:'../../../../../assets/images/P3.png',
      repetition: 'diary',
      function: 'client',
      startIn: '2014-02-09',
      status: 'Inativo'
    },


  ];

  supplier: SupplierInterface[] = [
    {
      _id: 1,
      name: 'Abraham linkon Abraham linkon Abraham linkonAbraham linkonAbraham linkonAbraham linkonAbraham linkon',
      email: 'exemplo@xequematervqwetbbqgbeedewfrebrbqeebrtbwrtre.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira do norte do canada',
      permition: 'Funcionário',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: [
        '../../../../../assets/images/material.jpg',
      ],
      img: [
        '../../../../../assets/images/material.jpg',
        '../../../../../assets/images/material.jpg',
        '../../../../../assets/images/material.jpg',
        '../../../../../assets/images/material.jpg',
      ],
      category: 'Material de construção especificamente para uso em casas urbanas',
      emphasis: true,
      material: 'plastico',
      price: '1496346456923232334937',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'administrador',
      status: 'Ativo'
    },
    {
      _id: 2,
      name: 'Brad Pit',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Funcionário',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: true,
      material: 'plastico',
      price: '149934937',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'kyc',
      status: 'Ativo'
    },
    {
      _id: 3,
      name: 'Katy Pary',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Funcionário',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'plastico',
      price: '149934937',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'produtos',
      status: 'Ativo'
    },
    {
      _id: 4,
      name: 'Vin Disel',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Funcionário',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'plastico',
      price: '149934937',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'controledeacesso',
      status: 'Ativo'
    },
    {
      _id: 5,
      name: 'Drake',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'plastico',
      price: '149934937',
      tel: '6140028922',
      type: 'Fornecedor',
      funcoes: 'notificacoes',
      status: 'Ativo'
    },
    {
      _id: 6,
      name: 'Travis Scots',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'plastico',
      price: '149934937',
      tel: '6140028922',
      type: 'Fornecedor',
      status: 'Inativo',
      funcoes: 'cliente',
    },
    {
      _id: 7,
      name: 'Avril Lavine',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'cliente',
      status: 'Inativo'
    },
    {
      _id: 8,
      name: 'Ana maria braga',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      funcoes: 'cliente',
      status: 'Inativo'
    },
    {
      _id: 9,
      name: 'Faustão',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'cliente',
    },
    {
      _id: 10,
      name: 'Al abduh jaba mohamed mia khalifa',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de construção',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'cliente',
    },
    {
      _id: 11,
      name: 'Bolsonaro',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de madeira',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'cliente',
    },
    {
      _id: 12,
      name: 'Putin',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de madeira',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'cliente',
    },
    {
      _id: 13,
      name: 'Donald trump',
      email: 'exemplo@xequemate.com',
      cnpj: '42788247000164',
      namecategory: 'chapa de madeira',
      permition: 'Administrador',
      date: '25122001',
      description: 'A casa é um lar aconchegante e acolhedor, com uma fachada em estilo clássico e bem cuidada. Ao entrar, há uma sala de estar ampla e confortável, decorada com móveis de madeira e estofados macios',
      specification: ' A cozinha é moderna e equipada com todos os utensílios necessários para cozinhar refeições deliciosas. No andar de cima, há três quartos espaçosos, todos com camas confortáveis e decoração agradável',
      doc: [] = [
        '../../../../../assets/images/eee.pdf',
        '../../../../../assets/images/eee.pdf',
      ],
      code: '000000007',
      imgcategory: ['https://obrasconstrucaocivil.com/wp-content/uploads/2022/08/materiais-baratos-para-construcao.jpg'],
      img: [
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
        '../../../../../assets/images/illustration.jpg',
      ],
      category: 'Material de madeira',
      emphasis: false,
      material: 'madeira',
      price: '149934937',
      tel: '6140028922',
      type: 'Cliente',
      status: 'Inativo',
      funcoes: 'administrador',
    },

  ];


  profile: ProfileInterface[] = [
    {
      name: 'Mohamed Ali Gusta de Alencar Alves Prado',
      email: 'luisk@funko.com',
      funcoes: 'Administrador'
    }
  ]
  getsupplier(): SupplierInterface[] {
    return this.supplier;
  }

  getprofile(): ProfileInterface[] {
    return this.profile;
  }
}
