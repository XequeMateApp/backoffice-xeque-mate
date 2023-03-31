import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { RoleResponseDto } from 'src/app/dto/logged/role-response.dto';


@Injectable({
  providedIn: 'root',
})
export class SupplierService extends BaseService {
  url = `${environment.api.xequeMateApi}role/`;
  profilePicture: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getRole(): Observable<RoleResponseDto[]> {
    return this.httpClient
      .get(`${this.url}list`, this.authorizedHeader)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }
}
