import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {User} from "../models/user";

@Injectable()
export class UserService {
  identity: any;
  artistas: any[] = [];
  token: any;
  urlFlistagramApi = 'http://localhost/flistagramAPI/api/v1';
  users: any[];

  constructor(public http: HttpClient) {
    console.log('Servicio de flistagram listo');
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return headers;
  }

  createAccount(user: User) {
    const url = `${this.urlFlistagramApi}/account/create`;
    return this.http.post(url, user);
  }

  loginUser(user: User) {
    const url = `${this.urlFlistagramApi}/account/token`;
    return this.http.post(url, user);
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  profileByUsername(username: string) {
    const url = `${this.urlFlistagramApi}/user/profile/${username}`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

  findUser(text: string) {
    const url = `${this.urlFlistagramApi}/user/find/${text}`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

}
