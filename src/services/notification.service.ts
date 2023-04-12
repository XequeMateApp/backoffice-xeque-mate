import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { CategoryRequestDto } from 'src/app/dto/logged/category-register-request.dto';
import { CategoryDeleteRequestDto } from 'src/app/dto/logged/category-delete-request.dto';
import { NotificationResponsetDto } from 'src/app/dto/logged/notification-response.dto';
import { NotificationRegisterRequestDto } from 'src/app/dto/logged/notification-register-request.dto';


@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BaseService {

  url = `${environment.api.xequeMateApi}notification/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }
  getNotification(): Observable<any> {
    return this.httpClient
      .get(`${this.url}find-all-notification`, this.authorizedHeader)
      .pipe(map(response => response),catchError(error => {console.log(error);return error;})
      );
  }

  register(dto: NotificationRegisterRequestDto): Observable<NotificationResponsetDto> {
    return this.httpClient
      .post(`${this.url}new-notification`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  deleteNotification(Id: string): Observable<NotificationResponsetDto> {
    return this.httpClient
      .delete(`${this.url}delete/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  editNotification(Id: string, dto: NotificationRegisterRequestDto): Observable<NotificationResponsetDto> {
    return this.httpClient
      .put(`${this.url}edit/${Id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
