import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./splash/splash.component";

const routes: Routes = [
  {
    path: "accounts",
    loadChildren: "./accounts/accounts.module#AccountsModule"
  },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "", component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
