import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PublicationService} from "../../services/publication.service";

@Component({
  selector: 'app-publication-page',
  templateUrl: './publication-page.component.html',
  styleUrls: ['./publication-page.component.scss']
})
export class PublicationPageComponent implements OnInit {
  publication;
  idPublication;
  myClass;

  constructor(public  _route: ActivatedRoute,
              public  _router: Router,
              public  _publicationService: PublicationService) {
    this.myClass = 'publicationPage';
    this._route.params.subscribe(paramsId => { // aqui vemos si la url se está actualizando
      this.idPublication = paramsId.id;
      this._publicationService.publicationById(this.idPublication).subscribe((data: any) => {
        console.log(data);
        this.publication = data.item;
        /*this.profile = data.item;
        if (this.identity.username === this.profile.username) {
          this.isUserLoggedProfile = true;
        } else {
          this.isUserLoggedProfile = false;
        }*/
      }, error => {
        /* this.profile = null;
         this.isUserLoggedProfile = false;*/
        this.publication = null;
      });
    });
  }

  ngOnInit() {
  }


}
