import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {GLOBAL} from "../../global";
import {User} from "../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  identity;

  constructor(
    private _userService: UserService
  ) {
    this.users = [];
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    this._userService.getAllUsers().subscribe((data: any) => {
      if (data.status) {
        this.users = data.items;
      } else {
        alert('Error al obtener los usuarios');
      }
    }, error => {
      alert('No puedes acceder a esta página');
    });
  }

  getURLPhoto(url): string {
    return GLOBAL.urlAPI + url;
  }

  follow(futureStatus, id_user) {
    if (futureStatus) {
      this._userService.addFollow(id_user).subscribe((data: any) => {
        this._userService.getAllUsers().subscribe((d: any) => {
          if (d.status) {
            this.users = d.items;
          } else {
            alert('Error al obtener los usuarios');
          }
        }, error => {
          alert('No puedes acceder a esta página');
        });
      }, error => {
        alert('Error');
      });
    } else {
      this._userService.removeFollow(id_user).subscribe((data: any) => {
        this._userService.getAllUsers().subscribe((d: any) => {
          if (d.status) {
            this.users = d.items;
          } else {
            alert('Error al obtener los usuarios');
          }
        }, error => {
          alert('No puedes acceder a esta página');
        });
      }, error => {
        alert('Error');
      });
    }
  }
}
