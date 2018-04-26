import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FlistagramService} from "../../services/flistagram.service";

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
    public  _route: ActivatedRoute,
    public  _router: Router,
    public  _flistagramService: FlistagramService
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
    this._flistagramService.loginUser(this.userLogin).subscribe(data => {
      if (data.status == true) {
        localStorage.setItem('token', data.token);
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
      console.log(data);
    });

  }

  onSubmitRegister(registerForm) {
    console.log(this.userRegister);
    this._flistagramService.createAccount(this.userRegister).subscribe(data => {
      localStorage.setItem('token', data.token);
      console.log(data);
    });
  }

}
