import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../../../modules/users-control/user-control/user-control.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() disparador:BehaviorSubject<any> = new BehaviorSubject( {});
  public headers!:any;

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

  getAllUsers(): Observable<any[]> {
    return this.http.get<any>('https://coffeequeen3.herokuapp.com/users');
  }
  getUser(email:any): Observable<any[]> {
    return this.http.get<any>(`https://coffeequeen3.herokuapp.com/users/?email=${email}`);
  }

  getAllUsersAuth(credential: any): Observable<any>{
    return this.http.post<any>('https://coffeequeen3.herokuapp.com/auth', credential);
  }
  putUserApi(updateUser: any, _idUser:any): Observable<any[]>{
    return this.http.put<any[]>(`https://coffeequeen3.herokuapp.com/users/${_idUser}`, updateUser)
  }

  postUser(newUser: any): Observable<any[]>{
    return this.http.post<any[]>('http://localhost:3000/users', newUser);
  }

  putUser(updateUser: User, _idUser:string): Observable<User[]>{
    return this.http.put<User[]>(`http://localhost:3000/users/${_idUser}`, updateUser)
  }

  deleteUser(idUser: string): Observable<User[]>{
   return this.http.delete<User[]>(`http://localhost:3000/users/${idUser}`)
  }

}


   /*  const token: any = sessionStorage.getItem("token")
    const headers = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
    },
  }; */
