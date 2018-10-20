import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountsListComponent } from "./accounts-list/accounts-list.component";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AccountsRoutingModule, FormsModule],
  declarations: [AccountsComponent, AccountsListComponent]
})
export class AccountsModule {}
