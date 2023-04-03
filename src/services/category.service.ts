import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { CategoryRequestDto } from 'src/app/dto/logged/category-register-request.dto';
import { CategoryDeleteRequestDto } from 'src/app/dto/logged/category-delete-request.dto';


@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  url = `${environment.api.xequeMateApi}category/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getCategory(): Observable<CategoryResponseDto[]> {
    return this.httpClient
      .get(`${this.url}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  register(dto: CategoryRequestDto): Observable<CategoryResponseDto> {
    return this.httpClient
      .post(`${this.url}register`, dto, this.authorizedHeader)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }
  deleteCategory(Id: string): Observable<CategoryDeleteRequestDto> {
    return this.httpClient
      .delete(`${this.url}delete/id/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  editCategory(Id: string, dto: CategoryRequestDto): Observable<CategoryResponseDto> {
    return this.httpClient
      .put(`${this.url}update/id/${Id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
