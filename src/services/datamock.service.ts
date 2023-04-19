import { Injectable } from '@angular/core';
import { ProfileInterface } from 'src/app/interface/profile.interface';
@Injectable({
  providedIn: 'root'
})
export class DatamockService {



  profile: ProfileInterface[] = [
    {
      name: 'Mohamed Ali Gusta de Alencar Alves Prado',
      email: 'luisk@funko.com',
      funcoes: 'Administrador'
    }
  ]
  getprofile(): ProfileInterface[] {
    return this.profile;
  }
}
