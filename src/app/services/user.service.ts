import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL : string = "https://backend-microservicio-byte.herokuapp.com";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'Application/json'})

  constructor( private http : HttpClient  ) { }

  getUsers() : Observable<User>{
    return this.http.get<User>(`${this.API_URL}/api/v1/user/list`);
  }

  getUserById( id : Number  ) : Observable<User>{
    return this.http.get<User>(`${this.API_URL}/api/v1/user/list/${id}`);
  }

  addUser( user : User ) : Observable<User>{
    let body = JSON.stringify( user );
    return this.http
      .post<User>(`${this.API_URL}/api/v1/user/add`, body, { headers : this.httpHeaders });
  }

  updateUser( user : User ) : Observable<User>{
    let body = JSON.stringify( user );
    return this.http
      .put<User>(`${this.API_URL}/api/v1/user/edit/${ user.id }`, body, { headers : this.httpHeaders });
  }

  deleteUse(  id : Number ) : Observable<User>{
    return this.http.delete<User>(`${this.API_URL}/api/v1/user/delete/${id}`, { headers : this.httpHeaders })
  }

}