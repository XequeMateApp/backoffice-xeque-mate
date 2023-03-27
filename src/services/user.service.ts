import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { UserRegisterRequestDto } from 'src/app/dto/logged/user.register-request.dto';
import { UserRegisterResponseDto } from 'src/app/dto/logged/user-register-response.dto';
import { UserGetResponseDto } from 'src/app/dto/logged/user-get-response.dto';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    url: string = `${environment.api.xequeMateApi}`;
    modalRegisterForm: UserRegisterRequestDto;
    constructor(
        private httpClient: HttpClient,
    ) {
        super();
    }
    register(dto: UserRegisterRequestDto): Observable<UserRegisterResponseDto> {
        return this.httpClient
            .post(`${this.url}user/register`, dto, this.anonymousHeader())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

    getUsers(): Observable<UserGetResponseDto[]> {
        return this.httpClient
            .get(`${this.url}user`, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}
