import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  user$: Subscription;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
