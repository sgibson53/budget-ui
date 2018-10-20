import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, CommonModule, MatButtonModule],
  declarations: []
})
export class MaterialModule {}
