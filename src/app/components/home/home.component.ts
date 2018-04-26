import {Component, OnInit} from '@angular/core';
import {PublicationService} from "../../services/publication.service";
import {GLOBAL} from "../../global";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  publications: any[];

  constructor(
    public _pulication: PublicationService
  ) {
    this._pulication.timeLine().subscribe((data: any) => {
      this.publications = data.item;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {

  }
}
