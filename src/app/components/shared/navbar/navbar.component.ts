import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss'
  ]
})

export class NavbarComponent implements OnInit {
  entity;

  constructor(public  _userService: UserService) {
  }

  ngOnInit() {
    this.entity = this._userService.getIdentity();
  }
}
