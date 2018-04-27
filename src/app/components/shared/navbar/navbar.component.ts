import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss'
  ]
})
export class NavbarComponent implements OnInit {
  entity;
  text;
  users;

  constructor(public  _userService: UserService) {
    this.text = "";
    this.users = [];
  }

  ngOnInit() {
    this.entity = this._userService.getIdentity();
  }


  searchUser() {
    if (this.text.length === 0) {
      return;
    }
    this._userService.findUser(this.text).subscribe((data: any) => {
        this.users = data.item;
      }, error => {
        console.log(error);
      }
    );
  }

}
