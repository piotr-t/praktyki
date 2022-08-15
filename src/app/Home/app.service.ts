import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  headers =  new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'});
  options = {headers: this.headers};


  baseURL = 'http://localhost:3800/api';


  subjectUserLogin = new BehaviorSubject<boolean>(false);

  post = {title: 'post1', author: 'ja',  imageURL: '', token: 1234};




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
  return this.http.post( this.baseURL + '/users/setUser', {login, password, email}, this.options);
}

getUser(login, password): any{
  const userData = {login, password};
  return this.http.post( this.baseURL + '/users/login', userData, this.options);
}

sendImage(im): any{
  return this.http.post( this.baseURL + '/posts/image', im, this.options);
}

getPosts(): any{
  return this.http.get( this.baseURL + '/posts');
}

getComments(): any{
  return this.http.get( this.baseURL + '/comments');
}

setComment(comm): any{
  return this.http.post( this.baseURL + '/comments', comm, this.options);
}



}
