import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { ProductRegisterRequestDto } from 'src/app/dto/logged/product-register-request.dto';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/product-register-response.dto';
import { ProductPutRequestDto } from 'src/app/dto/logged/product-put-request.dto';


@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  url = `${environment.api.xequeMateApi}backoffice/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getProducts(status: string): Observable<ProductsRegisterResponseDto[]> {
    return this.httpClient
      .get(`${this.url}product/?status=${status}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  productRegister(dto: ProductRegisterRequestDto): Observable<any> {
    return this.httpClient
      .post(`${this.url}product/backoffice-register`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  putProduct(id: string, dto: ProductPutRequestDto): Observable<any> {
    return this.httpClient
      .put(`${this.url}product/update/id/${id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  putAnalisysProduct(id: string, status: string): Observable<any> {
    return this.httpClient
      .put(`${this.url}product/review/id/${id}/status/${status}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

}
