import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup/signup.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule, MaterialModule],
  declarations: [SignupComponent, LoginComponent]
})
export class LoginModule {}
