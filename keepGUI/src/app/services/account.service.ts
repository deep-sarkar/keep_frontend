import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private _httpService:HttpService
  ) { }

  // URLS
  accountURL = environment.accountURL

  login(loginData:object) : Observable<any> {
    let headers = new HttpHeaders(
      {"Content-Type": "application/json"}
      )
    return this._httpService.postService(this.accountURL + "login/", loginData, {headers:headers})
  }
}
