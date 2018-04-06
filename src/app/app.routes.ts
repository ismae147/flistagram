import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {UploadPhotoComponent} from './components/upload-photo/upload-photo.component';

const APP_ROUTES: Routes = [
  {path: "home", component: HomeComponent},
  {path: "user/:id", component: UserComponent},
  {path: "user/upload/:id", component: UploadPhotoComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
