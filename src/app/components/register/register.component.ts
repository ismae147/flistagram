import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {FlistagramService} from "../../services/flistagram.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegister: User;

  constructor(public  _flistagramService: FlistagramService) {
    this.userRegister = new User();
  }

  ngOnInit() {
  }

  onSubmitRegister(registerForm) {
    console.log(this.userRegister);
    this._flistagramService.createAccount(this.userRegister).subscribe((data: any) => {
      if (data.status === true) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('identity', JSON.stringify(data.user));
        console.log(data);
      } else {
        alert('Usuario o contgraseña son incorrectos');
      }
    }, error => {
      console.log(error);
    });
  }
}
