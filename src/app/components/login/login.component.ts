import {Component, OnInit} from '@angular/core';

import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: User;

  constructor(public  _userService: UserService) {
    this.userLogin = new User();
  }

  ngOnInit() {
  }

  onSubmitLogin(loginForm) {
    console.log(this.userLogin);
    this._userService.loginUser(this.userLogin).subscribe((data: any) => {
      if (data.status === true) {
        localStorage.setItem('identity', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
    }, error => {
      console.log(error);
      alert('Usuario o contgraseña son incorrectos');
    });
  }

}
