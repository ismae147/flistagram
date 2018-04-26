import {Component, OnInit} from '@angular/core';
import {FlistagramService} from "../../../services/flistagram.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss'
  ]
})
export class NavbarComponent implements OnInit {
  entity;

  constructor(public  _flistagramService: FlistagramService
  ) {
  }

  ngOnInit() {
    this.entity = this._flistagramService.getIdentity();
  }
}
