import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { UserResetPasswordRequestDto } from 'src/app/dto/user/user-reset-password-request.dto';
import { UserUpdatePassword } from 'src/app/dto/user/user-update-password.dto';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { UserRegisterRequestDto } from 'src/app/dto/logged/user.register-request.dto';
import { UserRegisterResponseDto } from 'src/app/dto/logged/user-register-response.dto';
import { UserGetResponseDto } from 'src/app/dto/logged/user-get-response.dto';
import { UserPutRequestDto } from 'src/app/dto/logged/user-put-request.dto';
import { UserDeleteRequestDto } from 'src/app/dto/logged/user-delete-request.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  url = `${environment.api.xequeMateApi}backoffice/user`;
  profilePicture: Subject<string> = new Subject();
  modalRegisterForm: UserRegisterRequestDto;

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

  register(dto: UserRegisterRequestDto): Observable<UserRegisterResponseDto> {
    return this.httpClient
      .post(`${this.url}/register`, dto, this.anonymousHeader)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  editUsers(userID: string, dto: UserPutRequestDto): Observable<UserRegisterResponseDto> {
    return this.httpClient
      .put(`${this.url}/update/id/${userID}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  deleteUsers(userID: string): Observable<UserDeleteRequestDto> {
    return this.httpClient
      .patch(`${this.url}/delete/id/${userID}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  // deleteUsers(): Observable<UserDeleteRequestDto> {
  //   return this.httpClient.delete<UserDeleteRequestDto>(
  //     `${this.url}/delete/id/`,
  //     this.authorizedHeader
  //   );
  // }

  getUsers(): Observable<UserGetResponseDto[]> {
    return this.httpClient
      .get(`${this.url}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
