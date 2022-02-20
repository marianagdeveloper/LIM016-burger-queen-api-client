import { Injectable, Output ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { ILoginUser, ILoginUsers } from '../../../modules/login/login-user/login-user.metadata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

@Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});

  constructor(private http: HttpClient ) { }

  login(): Observable<ILoginUser[]>{
    return this.http.get<ILoginUser[]>('http://localhost:3000/users');
  }
  // Consume la API de users y devuelve un observable a la respuesta
  rolUser(): Observable<ILoginUsers[]>{
    // fetch('url', {method: GET})
    return this.http.get<ILoginUsers[]>('http://localhost:3000/users');
  }

}
  /* constructor(private http: HttpClient) {}

  login(credentials: ILoginUser): Observable<any> {
    return this.http.post('http://localhost:3000/auth', credentials);
  } */