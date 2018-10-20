import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../core/services/login.service";
import { UserService } from "../../core/services/user.service";
import * as jwtDecode from "jwt-decode";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmitLoginForm() {
    this.loginService.login(this.user).subscribe((res: any) => {
      const user = jwtDecode(res.token);
      this.userService.setCurrentUser({
        username: user.username,
        password: null,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
      });
      localStorage.setItem("token", res.token);
      this.router.navigate(["/"]);
    });
  }
}
