import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { UserResetPasswordRequestDto } from 'src/app/dto/user/user-reset-password-request.dto';
import { UserUpdatePassword } from 'src/app/dto/user/user-update-password.dto';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  url = `${environment.api.xequeMateApi}backoffice/user`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  resetPasswordVerification(dto: UserResetPasswordRequestDto): Observable<UserResetPasswordRequestDto> {
    return this.httpClient
      .post(`${this.url}/reset-password-verification`, dto, this.anonymousHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  verifyCode(
    code: number,
    email: string
  ): Observable<{ isValid: boolean }> {
    return this.httpClient.get<{ isValid: boolean }>(
      `${this.url}/verify-code/${email}/${code}`,
      this.anonymousHeader
    );
  }

  updatePassword(dto: UserUpdatePassword): Observable<any> {
    return this.httpClient
      .put(`${this.url}/password-confirmation`, this.encrypt(dto), this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}