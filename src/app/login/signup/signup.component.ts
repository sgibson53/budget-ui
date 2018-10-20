import { Component, OnInit } from "@angular/core";
import { User } from "../../core/models/user.model";
import { LoginService } from "../../core/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmitSignupForm() {
    this.loginService
      .register(this.user)
      .subscribe(res => this.router.navigate(["/"]));
  }
}
