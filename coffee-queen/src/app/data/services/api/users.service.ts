import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../../../modules/users-control/user-control/user-control.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});

  constructor(private http: HttpClient ) { }

  getAllUsers(): Observable<User[]>{
    // fetch('url', {method: GET})
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  postUser(newUser: User): Observable<User[]>{
    return this.http.post<User[]>('http://localhost:3000/users', newUser);
  }

  putUser(updateUser: User, _idUser:string): Observable<User[]>{
    return this.http.put<User[]>(`http://localhost:3000/users/${_idUser}`, updateUser)
  }

  deleteUser(idUser: string): Observable<User[]>{
   return this.http.delete<User[]>(`http://localhost:3000/users/${idUser}`)
  }

}
