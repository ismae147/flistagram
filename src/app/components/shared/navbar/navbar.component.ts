import {Component, OnInit} from '@angular/core';
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
  text;


  constructor(public  _userService: UserService
  ) {
    this.text = "";
  }

  ngOnInit() {
    this.entity = this._userService.getIdentity();
  }


  buscarUsuario() {
    this._userService.findUser(this.text).subscribe((data: any) => {
        console.log(data);
      }
    );
  }


}
