import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register = false;
  userLogin: User;
  userRegister: User;

  constructor(
    private  _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.userLogin = new User();
    this.userRegister = new User();
  }

  ngOnInit() {
  }

  setRegister(value = false) {
    this.register = value;
  }

  onSubmitLogin(loginForm) {
    console.log(this.userLogin);
  }

  onSubmitRegister(registerForm) {
    console.log(this.userRegister);
  }

}
