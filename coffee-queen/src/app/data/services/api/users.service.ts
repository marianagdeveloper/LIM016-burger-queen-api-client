import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../../modules/users-control/user-control/user-control.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) { }
  getAllUsers(): Observable<User[]>{
    // fetch('url', {method: GET})
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  postUser(newUser: User){
    this.http.post<User[]>('http://localhost:3000/users', newUser).subscribe( (res:any) => {
      return res;
    });
  }
  putUser(updateUser: User, _idUser:string){
    this.http.put<User[]>(`http://localhost:3000/users/${_idUser}`, updateUser)
    .subscribe( (res:any) => {
      return res;
    });
  }
  deleteUser(idUser: string){
    this.http.delete<User[]>(`http://localhost:3000/users/${idUser}`).subscribe( (res:any) => {

    });

  }
}
