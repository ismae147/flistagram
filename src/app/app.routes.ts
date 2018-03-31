import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";

const APP_ROUTES: Routes = [
  {path: "home", component: HomeComponent},
  {path: "user/:id", component: UserComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
