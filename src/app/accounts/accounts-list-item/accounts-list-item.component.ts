import { Component, OnInit, ElementRef, Input, ViewChild } from "@angular/core";
import { AccountService } from "src/app/core/services/account.service";
import { CurrencyPipe } from "@angular/common";
import { Account } from "src/app/core/models/account.model";

@Component({
  selector: "app-accounts-list-item",
  templateUrl: "./accounts-list-item.component.html",
  styleUrls: ["./accounts-list-item.component.scss"]
})
export class AccountsListItemComponent implements OnInit {
  @Input()
  account: Account;
  @ViewChild("inputBox")
  inputBox: ElementRef;
  oldValue: number;
  amount: number;

  constructor(
    private accountService: AccountService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    this.amount = this.account.amount;
  }

  editAccount() {
    this.inputBox.nativeElement.disabled = false;
    this.inputBox.nativeElement.style.border = "1px solid black";
    this.oldValue = this.account.amount;
  }

  submitAccountAmount(amount: number) {
    this.account.amount = amount;
    this.accountService.updateAccount(this.account).subscribe(
      _ => {},
      err => {
        this.account.amount = this.oldValue;
        console.error("Could not save value");
      }
    );
    this.disableInput();
  }

  attemptSubmit(e: KeyboardEvent) {
    const amount = (e.target as any).value;
    if (e.key === "Enter") {
      if (this.amountLegit(amount)) {
        this.submitAccountAmount(+this.sanitizeAmount(amount));
      } else {
        this.inputBox.nativeElement.value = this.currencyPipe.transform(
          this.account.amount
        );
        this.disableInput();
      }
    }
  }

  disableInput(): void {
    this.inputBox.nativeElement.disabled = true;
    this.inputBox.nativeElement.style.borderWidth = "1px";
    this.inputBox.nativeElement.style.borderColor = "transparent";
  }

  amountLegit(amount: string): boolean {
    const regex = /\$?\d*\.?\d{0,2}/;
    return regex.test(amount);
  }

  sanitizeAmount(amount: string): string {
    return amount.match(/\$/) ? amount.slice(1) : amount;
  }
}
