import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountsListComponent } from "./accounts-list/accounts-list.component";

const routes: Routes = [
  {
    path: "",
    component: AccountsComponent,
    children: [{ path: "", component: AccountsListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
