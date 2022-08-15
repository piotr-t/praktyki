import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  headers =  new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data'
    }); // .set('Authorization', 'dziala');

  options = {headers: this.headers};


  headers1 =  new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    }); // .set('Authorization', 'dziala');

  option1 = {headers: this.headers1};


  baseURL = 'http://localhost:3800/api';


  subjectUserLogin = new BehaviorSubject<boolean>(false);







  defaultPermissions = {
    add: false,
    view: false,
    delete: false,
    edit: false
  };

  constructor(private http: HttpClient) { }


checkUserLogin(): any{
  const token = sessionStorage.getItem('token');
  const login = sessionStorage.getItem('login');
  this.subjectUserLogin.next(false);
  this.subjectUserLogin.next(true);
}

setUser(login, email, password): Observable<any>{
  return this.http.post( this.baseURL + '/users/setUser', {login, password, email}, this.option1);
}

getUser(login, password): any{
  const userData = {login, password};
  return this.http.post( this.baseURL + '/users/login', userData, this.option1);
}

sendImage(im): any{
  return this.http.post( this.baseURL + '/posts/image', (im));
}

getPosts(): any{
  return this.http.get( this.baseURL + '/posts');
}

getComments(): any{
  return this.http.get( this.baseURL + '/comments');
}

setComment(comm): any{
  return this.http.post( this.baseURL + '/comments', comm, this.option1);
}



}
