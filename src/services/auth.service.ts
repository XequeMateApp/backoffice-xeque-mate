import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { JwtPayload } from 'src/app/utils/jwt-payload.interface';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { AuthenticationRequestDto } from 'src/app/dto/auth/user-authenticate-request.dto';
import { UserAuthenticatedDto } from 'src/app/dto/auth/user-authenticated.dto';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService extends BaseService {
  url = `${environment.api.xequeMateApi}backoffice`;
  token = {
    email: '',
    token: ''
  }
  jwtPayload: JwtPayload;
  constructor(private httpClient: HttpClient) {
    super();
  }

  authenticate(dto: AuthenticationRequestDto): Observable<UserAuthenticatedDto> {
    return this.httpClient
      .post(`${this.url}/authetication/authenticate`, dto, this.anonymousHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  setAuthenticatedUser(dto: UserAuthenticatedDto) {
    LocalStorageUtil.set(LocalStorageKeys.user, dto);
    this.getPayLoadFromJWT();
  }

  getAuthenticatedUser(): UserAuthenticatedDto {
    return LocalStorageUtil.get(LocalStorageKeys.user);
  }

  getPayLoadFromJWT() {
    this.token = this.getAuthenticatedUser();
    return this.jwtPayload = jwtDecode(this.token.token);
  }
}