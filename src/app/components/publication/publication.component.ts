import {Component, OnInit, Input} from '@angular/core';
import {GLOBAL} from "../../global";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publication: any;

  constructor() {
  }

  ngOnInit() {
  }

  getURLPhoto(url): string {
    return GLOBAL.urlAPI + url;
  }
}
