import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {User} from "../models/user";

@Injectable()
export class FlistagramService {

  artistas: any[] = [];

  urlFlistagramApi = 'http://localhost/flistagramAPI/api/v1';

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
}
