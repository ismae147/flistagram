import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {WindowRefService} from "../../services/windowReference.service";
import {Publication} from "../../models/publication";
import {PublicationService} from "../../services/publication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {
  publication: Publication;
  private _window: Window;

  constructor(
    private _windowRefService: WindowRefService,
    private _publicationService: PublicationService,
    public  _route: ActivatedRoute,
    public  _router: Router,
  ) {
    this.publication = new Publication();
  }

  @ViewChild("imageUpload") image: ElementRef;

  ngOnInit() {
    this._window = this._windowRefService.nativeWindow;
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      this.image.nativeElement.src = this._window.URL.createObjectURL(file);
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.publication.dataBase64Photo = btoa(binaryString);
    console.log(this.publication.dataBase64Photo);
  }

  onSubmitCreatePublication(form) {
    this._publicationService.createPublication(this.publication).subscribe((data: any) => {
      if (data.status === true) {
        this._router.navigate(['/publication', data.publication.id_publication], {relativeTo: this._route});
      } else {
        alert('Por favor envie bien los datos');
      }
    }, error => {
      console.log(error);
    });
  }
}
