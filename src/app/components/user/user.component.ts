import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GLOBAL} from "../../global";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.styles.scss'
  ]
})
export class UserComponent implements OnInit {
  identity;
  profile;
  username;
  isUserLoggedProfile;

  constructor(public  _route: ActivatedRoute,
              public  _router: Router,
              public  _userService: UserService
  ) {
    this.profile = null;
    this.isUserLoggedProfile = false;
    this._route.params.subscribe(paramsId => { // aqui vemos si la url se está actualizando
      this.username = paramsId.username;
      this._userService.profileByUsername(this.username).subscribe((data: any) => {
        this.profile = data.item;
        if (this.identity.username === this.profile.username) {
          this.isUserLoggedProfile = true;
        } else {
          this.isUserLoggedProfile = false;
        }
      }, error => {
        this.profile = null;
        this.isUserLoggedProfile = false;
      });
    });
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/home'], {relativeTo: this._route});
  }

  getURLPhoto(url): string {
    return GLOBAL.urlAPI + url;
  }

  follow() {
    this._userService.profileByUsername(this.username).subscribe((data: any) => {
      this.profile = data.item;
      if (this.identity.username === this.profile.username) {
        this.isUserLoggedProfile = true;
      } else {
        this.isUserLoggedProfile = false;
      }
    }, error => {
      this.profile = null;
      this.isUserLoggedProfile = false;
    });
  }
}
