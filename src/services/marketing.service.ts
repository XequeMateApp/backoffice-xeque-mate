import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { NotificationResponsetDto } from 'src/app/dto/logged/notification-response.dto';
import { NotificationRegisterRequestDto } from 'src/app/dto/logged/notification-register-request.dto';
import { MarketingResponseDto } from 'src/app/dto/logged/marketing-response.dto';
import { MarketingRegisterRequestDto } from 'src/app/dto/logged/marketing-register-request.dto';


@Injectable({
  providedIn: 'root',
})
export class MarketingService extends BaseService {

  url = `${environment.api.xequeMateApi}Marketing/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getMarketing(): Observable<MarketingResponseDto[]> {
    return this.httpClient
      .get(`${this.url}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  register(dto: MarketingRegisterRequestDto): Observable<MarketingResponseDto> {
    return this.httpClient
      .post(`${this.url}register`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  deleteMarketing(Id: string): Observable<MarketingResponseDto> {
    return this.httpClient
      .delete(`${this.url}delete/id/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  editNotification(Id: string, dto: NotificationRegisterRequestDto): Observable<NotificationResponsetDto> {
    return this.httpClient
      .put(`${this.url}edit/${Id}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
