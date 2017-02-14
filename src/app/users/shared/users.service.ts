import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "http://localhost:8000/api/v1/contact";
  private contactUrl: string = "http://localhost:8000/api/v1/contact/";


  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.contactUrl)
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.contactUrl, JSON.stringify(user),options)
      .map(res => res.json());
  }


  updateUser(user){
     
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user), {headers: headers})
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}
