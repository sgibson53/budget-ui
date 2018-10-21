import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountsListComponent } from "./accounts-list/accounts-list.component";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { FormsModule } from "@angular/forms";
import { AngularSvgIconModule } from "angular-svg-icon";
import { AccountsListItemComponent } from "./accounts-list-item/accounts-list-item.component";

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    AngularSvgIconModule
  ],
  declarations: [
    AccountsComponent,
    AccountsListComponent,
    AccountsListItemComponent
  ],
  providers: [CurrencyPipe]
})
export class AccountsModule {}
