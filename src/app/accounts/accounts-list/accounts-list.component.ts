import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AccountService } from "../../core/services/account.service";
import { Account } from "../../core/models/account.model";
import { User } from "../../core/models/user.model";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"]
})
export class AccountsListComponent implements OnInit, OnDestroy {
  accounts$: Subscription;
  accounts: Account[];
  account: Account = {
    name: "",
    amount: 0,
    user_id: null
  };
  user$: Subscription;
  user: User;
  placeholder = "Chase Savings, etc.";

  constructor(
    private accountService: AccountService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.accounts$ = this.accountService
      .getAccounts()
      .subscribe((accounts: Account[]) => (this.accounts = accounts));

    this.user$ = this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
      this.account.user_id = user._id;
    });
  }

  ngOnDestroy() {
    this.accounts$.unsubscribe();
  }

  onAddAccount() {
    this.accountService.addAccount(this.account).subscribe((res: any) => {
      if (res.success) {
        this.account = res.account;
        this.accounts = [...this.accounts, { ...this.account }];
      }
    });
  }
}
