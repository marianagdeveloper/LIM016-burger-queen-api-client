import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../../../modules/users-control/user-control/user-control.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});
  public headers!:any;

  // HERE LINK url API!
  public urlAPI: string = 'https://coffeequeen3.herokuapp.com';

  loggedIn():Boolean{
    return !!sessionStorage.getItem('token');
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  removeToken(){
    return sessionStorage.removeItem('token');
  }

  constructor(private http: HttpClient ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlAPI + '/users');
  }

  getUserByEmail(email:string): Observable<User> {
    return this.http.get<User>(this.urlAPI + `/users/${email}`);
  }

  getTokenAuth(credential: object): Observable<any>{
    return this.http.post<any>(this.urlAPI + '/auth', credential);
  }
  putUserApi(updateUser: User, _idUser:string): Observable<User[]>{
    return this.http.put<User[]>(this.urlAPI + `/users/${_idUser}`, updateUser)
  }

  postUserApi(newUser: any): Observable<User[]>{
    return this.http.post<User[]>(this.urlAPI + '/users/', newUser);
  }

  deleteUserApi(idUser: string): Observable<User[]>{
    return this.http.delete<User[]>(this.urlAPI + `/users/${idUser}`)
  }
}
