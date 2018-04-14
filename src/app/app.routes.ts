import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {UploadPhotoComponent} from './components/upload-photo/upload-photo.component';
import {SettingsComponent} from './components/settings/settings.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {LoginComponent} from './components/login/login.component';

const APP_ROUTES: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "user/:id", component: UserComponent},
  {path: "user/upload/:id", component: UploadPhotoComponent},
  {path: "user/settings/:id", component: SettingsComponent},
  {path: "user/settings/edit-profile/:id", component: EditProfileComponent},

  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
