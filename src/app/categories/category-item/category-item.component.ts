import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { Category } from "src/app/core/models/category.model";
import { CategoryService } from "src/app/core/services/category.service";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  @Input()
  category: Category;
  @ViewChild("inputBox")
  inputBox: ElementRef;
  oldValue: number;
  amount: number;

  constructor(
    private categoryService: CategoryService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    this.amount = this.category.amount;
  }

  editCategory() {
    this.inputBox.nativeElement.disabled = false;
    this.inputBox.nativeElement.style.border = "1px solid black";
    this.oldValue = this.category.amount;
  }

  submitCategoryAmount(amount: number) {
    this.category.amount = amount;
    this.categoryService.updateCategory(this.category).subscribe(
      _ => {},
      err => {
        this.category.amount = this.oldValue;
        console.error("Could not save value");
      }
    );
    this.disableInput();
  }

  attemptSubmit(e: KeyboardEvent) {
    const amount = (e.target as any).value;
    if (e.key === "Enter") {
      if (this.amountLegit(amount)) {
        this.submitCategoryAmount(+this.sanitizeAmount(amount));
      } else {
        this.inputBox.nativeElement.value = this.currencyPipe.transform(
          this.category.amount
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
