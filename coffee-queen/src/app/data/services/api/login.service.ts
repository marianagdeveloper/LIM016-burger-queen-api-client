import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginUser } from './../../../modules/login/login-user/login-user.metadata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(credentials: ILoginUser): Observable<any> {
    return this.http.post('http://localhost:3000/auth', credentials);
  }
}
