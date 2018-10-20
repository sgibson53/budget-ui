import { Component, OnInit } from "@angular/core";
import { AccountService } from "../core/services/account.service";
import { Account } from "../core/models/account.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  total = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      (accounts: Account[]) =>
        (this.total = accounts.reduce((r: number, el: Account) => {
          return r + el.amount;
        }, 0))
    );
  }
}
