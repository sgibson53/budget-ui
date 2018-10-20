import { Component, OnInit } from "@angular/core";
import * as jwtDecode from "jwt-decode";
import { UserService } from "./core/services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "budget";

  constructor(private userService: UserService) {}

  ngOnInit() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      this.userService.setCurrentUser(user);
    }
  }
}
