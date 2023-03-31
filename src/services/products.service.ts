import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/products-register-response.dto';


@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  url = `${environment.api.xequeMateApi}client/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getProducts(): Observable<ProductsRegisterResponseDto[]> {
    return this.httpClient
      .get(`${this.url}product`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
