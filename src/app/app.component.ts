import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "./models/user";
import {FlistagramService} from "./services/flistagram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  identity;
  register = null;

  constructor(
    public  _route: ActivatedRoute,
    public  _router: Router,
    public  _flistagramService: FlistagramService
  ) {
  }

  ngOnInit() {
    this.identity = this._flistagramService.getIdentity();
    if (this.identity == null) {
      this._router.navigate(['/home'], {relativeTo: this._route});
    }
  }

  ngDoCheck() {
    this.identity = this._flistagramService.getIdentity();
  }

  setRegister(value = false) {
    this.register = value;
  }
}
