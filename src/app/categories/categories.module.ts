import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoryComponent } from "./category.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { FormsModule } from "@angular/forms";
import { AngularSvgIconModule } from "angular-svg-icon";
import { CategoryItemComponent } from "./category-item/category-item.component";

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    AngularSvgIconModule
  ],
  declarations: [
    CategoryComponent,
    CategoriesListComponent,
    CategoryItemComponent
  ],
  providers: [CurrencyPipe]
})
export class CategoriesModule {}
