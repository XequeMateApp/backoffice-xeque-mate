import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { UserAuthenticatedDto } from "src/app/dto/auth/user-authenticated.dto";
import CryptoUtil from "src/app/utils/crypto.util";
import { environment } from "src/environments/environment";

export abstract class BaseService {

  protected get anonymousHeader() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  protected get authorizedHeader() {
    const userJson = localStorage.getItem("user") as string;
    const user: UserAuthenticatedDto = JSON.parse(userJson);

    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      }),
    };
  }

  protected encrypt(data: object) {
    return { payload: CryptoUtil.encrypt(environment.encryptKey, JSON.stringify(data)) };
  }

  protected decrypt(data: string) {
    return CryptoUtil.decrypt(environment.encryptKey, data);
  }

  protected extractData(response: any) {
    return response.data || {};
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = new Error();
    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Unknown Error');
        response.error.errors = customError;
      }
    }
    if (response.status === 500) {
      customError.push('Error processing request');
      customResponse.error.errors = customError;
      return throwError(customResponse);
    }
    return throwError(response);
  }
}

class Error {
  error: ErrorResponse = new ErrorResponse();
}

class ErrorResponse {
  errors: string[] = [];
}
