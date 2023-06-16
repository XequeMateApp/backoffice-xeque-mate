import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { ProductRegisterRequestDto } from 'src/app/dto/logged/product-register-request.dto';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/product-register-response.dto';
import { ProductPutRequestDto } from 'src/app/dto/logged/product-put-request.dto';
import { ProductPutAnalisysRequestDto } from 'src/app/dto/logged/product-put-analisys-reuqest.dto';

import { ProductPromoUpdateRequestDto } from 'src/app/dto/logged/product-promo-update-request.dto';

import { UnityRequestDto } from 'src/app/dto/logged/unity-request.dto';
import { UnityResponsetDto } from 'src/app/dto/logged/uniry-response.dto';



@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  url = `${environment.api.xequeMateApi}backoffice/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  setPromoDate(id: string, dto: ProductPromoUpdateRequestDto): Observable<any> {
    
    return this.httpClient
      .put(`${this.url}product/update-product-promoDate/${id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
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

  putAnalisysProduct(id: string, status: string, dto: ProductPutAnalisysRequestDto): Observable<any> {
    return this.httpClient
      .put(`${this.url}product/review/id/${id}/status/${status}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  deleteProduct(Id: string): Observable<any> {
    return this.httpClient
      .delete(`${this.url}product/delete/id/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getAllProducts(): Observable<any> {
    return this.httpClient
      .get(`${this.url}product/all`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
  // get products by days
  getAllProductsDays7(): Observable<any> {
    return this.httpClient
      .get(`${this.url}product/7`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getAllProductsDays15(): Observable<any> {
    return this.httpClient
      .get(`${this.url}product/15`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getAllProductsDays30(): Observable<any> {
    return this.httpClient
      .get(`${this.url}product/30`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getAllFilteredProductsByDate(days: number): Observable<any> {
    return this.httpClient
      .get(`${this.url}product/${days}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  // UNITY

  unityCreate(dto: UnityRequestDto): Observable<any> {
    return this.httpClient
      .post(`${this.url}measurement/register`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  unityList(): Observable<any> {
    return this.httpClient
      .get(`${this.url}measurement/list`, this.authorizedHeader)
      .pipe(map(response => response), catchError(error => { console.log(error); return error; })
      );
  }

  unityEdit(Id: string, dto: UnityRequestDto): Observable<any> {
    return this.httpClient
      .put(`${this.url}measurement/update/${Id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  unityDelete(Id: string): Observable<any> {
    return this.httpClient
      .delete(`${this.url}measurement/delete/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

}
