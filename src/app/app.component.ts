import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "./models/user";
import {FlistagramService} from "./services/flistagram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  login: boolean = false;
  register = null;
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


  setRegister(value = false) {
    this.register = value;
  }

  onSubmitLogin(loginForm) {
    console.log(this.userLogin);
    this._flistagramService.loginUser(this.userLogin).subscribe((data: any) => {
      if (data.status == true) {
        this.login = true;
        localStorage.setItem('token', data.token);
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
      console.log(data);
    });

  }

  onSubmitRegister(registerForm) {
    console.log(this.userRegister);
    this._flistagramService.createAccount(this.userRegister).subscribe((data: any) => {
      if (data.status == true) {
        localStorage.setItem('token', data.token);
        console.log(data);
        this.login = true;
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
    });
  }
}
