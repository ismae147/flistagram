import {Component, OnInit, Input} from '@angular/core';
import {GLOBAL} from "../../global";
import {Comment} from "../../models/comment";
import {PublicationService} from "../../services/publication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publication: any;
  @Input() customClass: any;
  commentObj: Comment;

  constructor(public  _route: ActivatedRoute,
              public  _router: Router,
              public _publicationService: PublicationService) {
    this.commentObj = new Comment();

  }

  ngOnInit() {
  }

  getURLPhoto(url): string {
    return GLOBAL.urlAPI + url;
  }

  commentPhoto(commentForm) {
    if (this.commentObj.text.trim() !== "") {
      this._publicationService.commentPhotoService(this.commentObj, this.publication.id_publication).subscribe((data: any) => {
        if (data.status) {
          this._publicationService.publicationById(this.publication.id_publication).subscribe((d: any) => {
            console.log(d);
            this.publication = d.item;
            this.commentObj.text = "";
          }, error => {
            this.publication = null;
          });
        } else {
          alert('No puede comentar');
        }
      }, error => {
        console.log(error);
      });
    }
  }

}
