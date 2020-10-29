import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getService(url:string, header:object){
    return this._http.get(url, header)
  }

  postService(url:string, data:object, header:object){
    return this._http.post(url, data, header)
  }
}
