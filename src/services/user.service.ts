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
import { SupplierRegisterResponseDto } from 'src/app/dto/logged/supplier-register-response.dto';
import { SupplierRegisterRequestDto } from 'src/app/dto/logged/supplier-register-request.dto';
import { SupplierCustomersResponsetDto } from 'src/app/dto/logged/supplier-costumers-response.dto';
import { SupplierCustomersPutRequestDto } from 'src/app/dto/logged/supplier-customers-put-request.dto';
import { SupplierCustomersSuppliersPutRequesttDto } from 'src/app/dto/logged/supplier-costumers-suppliers-put-request.dto';

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
  // USER-BACKOFFICE
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

  resendEmail(email: string): Observable<{ isValid: boolean }> {
    return this.httpClient
      .post<{ isValid: boolean }>(`${this.url}/resend-email/${email}`, this.anonymousHeader);
  }

  getUsers(): Observable<UserGetResponseDto[]> {
    return this.httpClient
      .get(`${this.url}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getUserInfo(): Observable<UserGetResponseDto[]> {
    return this.httpClient
      .get(`${this.url}/user-info`, this.authorizedHeader)
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
      .delete(`${this.url}/delete/id/${userID}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


// USER-PLATAFORM
  getAllClients(): Observable<any> {
    return this.httpClient
      .get(`${this.url}/list`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

// USER-PLATAFORM-SUPPLIER
  getUserPlataform(status: string): Observable<SupplierRegisterResponseDto[]> {
    return this.httpClient
      .get(`${this.url}/user-plataform?status=${status}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  updateUserPlataform(userID: string, status: string, dto: SupplierRegisterRequestDto): Observable<SupplierRegisterResponseDto> {
    return this.httpClient
      .put(`${this.url}/user-plataform/review/id/${userID}/status/${status}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


// USER-PLATAFORM-SUPPLIER-CUSTOMERS
  updateSupplierCustomers(userID: string, dto: SupplierCustomersPutRequestDto): Observable<any> {
    return this.httpClient
      .put(`${this.url}/user-plataform/update/id/${userID}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  updateSupplierCustomersSupplier(userID: string, dto: SupplierCustomersSuppliersPutRequesttDto): Observable<any> {
    return this.httpClient
      .put(`${this.url}/user-plataform/update/id/${userID}`, dto, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  deleteSupplierCustomers(Id: string): Observable<any> {
    return this.httpClient
      .delete(`${this.url}/user-plataform/delete/id/${Id}`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }


}
