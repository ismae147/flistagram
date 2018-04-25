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
<<<<<<< HEAD
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponentsLoginComponent } from './app-components-login/app-components-login.component';
// services




=======
import {UploadPhotoComponent} from './components/upload-photo/upload-photo.component';
import {SettingsComponent} from './components/settings/settings.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {LoginComponent} from './components/login/login.component';
>>>>>>> df7518b6e84798229550a5b04fd0e4e1c6f3fc50

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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
