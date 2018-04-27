import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GLOBAL} from "../../global";
import {WindowRefService} from "../../services/windowReference.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.styles.scss'
  ]
})
export class UserComponent implements OnInit {
  identity;
  profile;
  username;
  isUserLoggedProfile;
  dataBase64Photo;
  private _window: Window;

  constructor(public  _route: ActivatedRoute,
              private _windowRefService: WindowRefService,
              public  _router: Router,
              public  _userService: UserService
  ) {
    this.profile = null;
    this.dataBase64Photo = "";
    this.isUserLoggedProfile = false;
    this._route.params.subscribe(paramsId => { // aqui vemos si la url se está actualizando
      this.username = paramsId.username;
      this._userService.profileByUsername(this.username).subscribe((data: any) => {
        this.profile = data.item;
        if (this.identity.username === this.profile.username) {
          this.isUserLoggedProfile = true;
        } else {
          this.isUserLoggedProfile = false;
        }
      }, error => {
        this.profile = null;
        this.isUserLoggedProfile = false;
      });
    });
  }

  @ViewChild("myProfilePhoto") image: ElementRef;

  ngOnInit() {
    this._window = this._windowRefService.nativeWindow;
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/home'], {relativeTo: this._route});
  }

  getURLPhoto(url): string {
    return GLOBAL.urlAPI + url;
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
    this.dataBase64Photo = btoa(binaryString);
    this.uploadProfilePhoto();
  }

  uploadProfilePhoto() {
    this._userService.uploadProfilePhoto(this.dataBase64Photo).subscribe((data: any) => {
      if (data.status === true) {
        alert('Gracias por actualizar');
      } else {
        alert('Por favor envie bien los datos');
      }
    }, error => {
      console.log(error);
      alert('Hubo un error al subir la foto');
    });
  }

  /*follow() {
    this._userService.profileByUsername(this.username).subscribe((data: any) => {
      this.profile = data.item;
      if (this.identity.username === this.profile.username) {
        this.isUserLoggedProfile = true;
      } else {
        this.isUserLoggedProfile = false;
      }
    }, error => {
      this.profile = null;
      this.isUserLoggedProfile = false;
    });
  }*/
}
