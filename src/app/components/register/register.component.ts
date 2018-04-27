import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegister: User;

  constructor(public  _flistagramService: UserService) {
    this.userRegister = new User();
  }

  ngOnInit() {
  }

  onSubmitRegister(registerForm) {
    this._flistagramService.createAccount(this.userRegister).subscribe((data: any) => {
      console.log(data);
      if (data.status === true) {
        localStorage.clear();
        localStorage.setItem('token', data.token);
        localStorage.setItem('identity', JSON.stringify(data.item));
        console.log(data);
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
    }, error => {
      console.log(error);
    });
  }
}
