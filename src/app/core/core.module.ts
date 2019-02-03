import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderNavComponent } from "./components/header/header-nav/header-nav.component";
import { RouterModule } from "@angular/router";
import { throwIfAlreadyLoaded } from "./module-import-guard";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, HeaderNavComponent],
  exports: [HeaderComponent, HeaderNavComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
