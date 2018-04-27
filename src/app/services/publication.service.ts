import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import {Comment} from "../models/comment";
import {Publication} from "../models/publication";

@Injectable()
export class PublicationService {
  identity: any;
  token: any;
  urlFlistagramApi = 'http://localhost/flistagramAPI/api/v1';

  constructor(public http: HttpClient) {
    console.log('Publication de flistagram listo');
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return headers;
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

  timeLine() {
    const url = `${this.urlFlistagramApi}/publication/timeline`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

  publicationById(id) {
    const url = `${this.urlFlistagramApi}/publication/data/${id}`;
    return this.http.get(url, {headers: this.getHeaders()});
  }

  commentAction(comment: Comment, idPublication) {
    const url = `${this.urlFlistagramApi}/comment/pub/${idPublication}`;
    return this.http.post(url, comment, {headers: this.getHeaders()});
  }

  likeAction(futureState, idPublication) {
    const url = `${this.urlFlistagramApi}/like/pub/${idPublication}/${futureState ? '1' : '0'}`;
    return this.http.post(url, {}, {headers: this.getHeaders()});
  }

  createPublication(publication: Publication) {
    const url = `${this.urlFlistagramApi}/publication/create`;
    return this.http.post(url, publication, {headers: this.getHeaders()});
  }
}
