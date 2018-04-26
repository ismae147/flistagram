import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {FlistagramService} from "../../services/flistagram.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.styles.scss'
  ]
})
export class UserComponent implements OnInit {
  identity;

  constructor(public  _route: ActivatedRoute,
              public  _router: Router,
              public  _flistagramService: FlistagramService
  ) {
  }

  ngOnInit() {
    this.identity = this._flistagramService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/home'], {relativeTo: this._route});
  }
}
