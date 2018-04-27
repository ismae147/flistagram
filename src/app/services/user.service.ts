import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import {Publication} from "../models/publication";
import {GLOBAL} from "../global";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
  identity: any;
  token: any;
  urlFlistagramApi = GLOBAL.urlAPI + GLOBAL.apiVersion;
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

  profileByUsername(username: string) {
    const url = `${this.urlFlistagramApi}/user/profile/${username}`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

  uploadProfilePhoto(dataBase64Photo: string) {
    const url = `${this.urlFlistagramApi}/user/profile/photo`;
    return this.http.post(url, {
      'dataBase64Photo': dataBase64Photo
    }, {headers: this.getHeaders()});
  }

  getAllUsers() {
    const url = `${this.urlFlistagramApi}/user/all`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

  addFollow(id_to_follow: string) {
    const url = `${this.urlFlistagramApi}/follow/add/${id_to_follow}`;
    return this.http.post(url, {}, {headers: this.getHeaders()});
  }

  removeFollow(id_to_follow: string) {
    const url = `${this.urlFlistagramApi}/follow/remove/${id_to_follow}`;
    return this.http.post(url, {}, {headers: this.getHeaders()});
  }
}
