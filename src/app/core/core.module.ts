import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderNavComponent } from "./components/header/header-nav/header-nav.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, HeaderNavComponent],
  exports: [HeaderComponent, HeaderNavComponent]
})
export class CoreModule {}
