import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';
import { RoleRegisterRequestDto } from 'src/app/dto/logged/role-register-request.dto';
import { RoleDeleteRequestDto } from 'src/app/dto/logged/role-delete-request.dto';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  url = `${environment.api.xequeMateApi}role/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  register(dto: RoleRegisterRequestDto): Observable<RoleResponseDto> {
    return this.httpClient
      .post(`${this.url}register`, dto, this.authorizedHeader)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }


  editRoles(dto: RoleRegisterRequestDto): Observable<RoleResponseDto> {
    return this.httpClient
      .put(`${this.url}change-role`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  deleteRoles(userID: string): Observable<RoleDeleteRequestDto> {
    return this.httpClient
      .delete(`${this.url}delete/id/${userID}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


  getRole(): Observable<RoleResponseDto[]> {
    return this.httpClient
      .get(`${this.url}list`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
