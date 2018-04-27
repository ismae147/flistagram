import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {UploadPhotoComponent} from './components/upload-photo/upload-photo.component';
import {SettingsComponent} from './components/settings/settings.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {PublicationPageComponent} from "./components/publication-page/publication-page.component";
import {UsersComponent} from "./components/users/users.component";

const APP_ROUTES: Routes = [
  {path: "home", component: HomeComponent},
  {path: "user/:username", component: UserComponent},
  {path: "users", component: UsersComponent},
  {path: "publication/:id", component: PublicationPageComponent},
  {path: "user/upload/:username", component: UploadPhotoComponent},
  {path: "user/settings/:username", component: SettingsComponent},
  {path: "user/settings/edit-profile/:username", component: EditProfileComponent},

  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
