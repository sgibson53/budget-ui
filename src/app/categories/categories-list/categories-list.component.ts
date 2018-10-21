import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/app/core/models/user.model";
import { Subscription } from "rxjs";
import { Category } from "src/app/core/models/category.model";
import { CategoryService } from "src/app/core/services/category.service";
import { UserService } from "src/app/core/services/user.service";
import { Snapshot } from "src/app/core/models/snapshot.model";
import { SnapshotService } from "src/app/core/services/snapshot.service";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"]
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories$: Subscription;
  categories: Category[];
  category: Category = {
    name: "Rent, Vacation, Insurance, etc",
    amount: 0,
    user_id: null
  };
  user$: Subscription;
  user: User;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private snapshotService: SnapshotService
  ) {}

  ngOnInit() {
    this.categories$ = this.categoryService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));

    this.user$ = this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
      this.category.user_id = user._id;
    });
  }

  ngOnDestroy() {
    this.categories$.unsubscribe();
  }

  onAddCategory() {
    this.categoryService.addCategory(this.category).subscribe((res: any) => {
      this.category = res.category;
      this.categories = [...this.categories, { ...this.category }];
    });
  }

  saveSnapshot() {
    const snapshot: Snapshot = {
      timestamp: new Date(),
      user_id: this.user._id,
      categories: this.categories
    };

    this.snapshotService.addSnapshot(snapshot).subscribe();
  }
}
