import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {SearchComponent} from './components/shared/search/search.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {UserComponent} from './components/user/user.component';
import {ProfileTimeLinePhotoComponent} from './components/profile-time-line-photo/profile-time-line-photo.component';

import {app_routing} from './app.routes';
import {UploadPhotoComponent} from './components/upload-photo/upload-photo.component';
import {SettingsComponent} from './components/settings/settings.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {UserService} from "./services/user.service";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PublicationService} from "./services/publication.service";
import {PublicationComponent} from './components/publication/publication.component';
import {PublicationPageComponent} from './components/publication-page/publication-page.component';

import {WindowRefService} from "./services/windowReference.service";
import {UsersComponent} from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TimelineComponent,
    UserComponent,
    ProfileTimeLinePhotoComponent,
    UploadPhotoComponent,
    SettingsComponent,
    EditProfileComponent,
    LoginComponent,
    RegisterComponent,
    PublicationComponent,
    PublicationPageComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService, PublicationService, WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
