import { Component, OnInit, OnDestroy } from "@angular/core";
import { AccountService } from "../core/services/account.service";
import { Account } from "../core/models/account.model";
import { CategoryService } from "../core/services/category.service";
import { forkJoin, Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { SnapshotService } from "../core/services/snapshot.service";
import { Snapshot } from "../core/models/snapshot.model";
import { UserService } from "../core/services/user.service";
import { User } from "../core/models/user.model";
import { Category } from "../core/models/category.model";
import * as moment from "moment";
import { IndividualSeriesOptions } from "highcharts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private accountsAndCategories$: Subscription;
  private snapshot$: Subscription;
  private user: User;
  private snapshots: Snapshot[];
  private categoriesTotal: number;
  streamData: IndividualSeriesOptions[];
  pieData: IndividualSeriesOptions[];
  streamValueCategories = {};
  streamCategories = ["The Dawn of Man"];
  streamCalculations: any;
  total = 0;

  constructor(
    private accountService: AccountService,
    private categoryService: CategoryService,
    private snapshotService: SnapshotService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService
      .getCurrentUser()
      .pipe(take(1))
      .subscribe((user: User) => (this.user = user));
    this.watchAccountsAndCategories();
    this.watchSnapshots();
  }

  watchAccountsAndCategories(): void {
    this.accountsAndCategories$ = forkJoin(
      this.accountService.getAccounts(),
      this.categoryService.getCategories()
    ).subscribe(([accounts, categories]) => {
      const accountsTotal = accounts.reduce((r: number, el: Account) => {
        return r + el.amount;
      }, 0);

      this.categoriesTotal = categories.reduce((r: number, el: Account) => {
        return r + el.amount;
      }, 0);

      this.total = accountsTotal - this.categoriesTotal;
    });
  }

  watchSnapshots() {
    this.snapshot$ = this.snapshotService
      .getSnapshots(this.user._id)
      .subscribe((snapshots: Snapshot[]) => {
        this.snapshots = [...snapshots];
        this.calculateChartData();
        this.formatStreamData();
      });
  }

  calculateChartData(): void {
    this.snapshots.forEach((snapshot: Snapshot, i) => {
      // STREAMGRAPH
      // Pull out budget category data
      snapshot.categories.forEach((category: Category) => {
        if (!this.streamValueCategories.hasOwnProperty(category.name)) {
          // Add the new category with history of zeros
          this.streamValueCategories[category.name] = Array(i).fill(0);
        }

        // Push value
        this.streamValueCategories[category.name].push(category.amount);
      });

      // Update deleted/missing with a zero
      for (const key in this.streamValueCategories) {
        if (
          this.streamValueCategories.hasOwnProperty(key) &&
          this.streamValueCategories[key].length === i
        ) {
          this.streamValueCategories[key].push(0);
        }
      }

      // Add x axis category
      this.streamCategories.push(
        moment(snapshot.timestamp).format("MMM Do YYYY")
      );

      // PIE
      const lastSnapshot = this.snapshots[this.snapshots.length - 1];
      this.pieData = [
        {
          name: "Categories",
          data: []
        }
      ];
      lastSnapshot.categories.forEach((category: Category) => {
        this.pieData[0].data.push({
          name: category.name,
          y: (category.amount / this.categoriesTotal) * 100
        });
      });
    });
  }

  formatStreamData(): void {
    this.streamData = [];
    for (const key in this.streamValueCategories) {
      if (this.streamValueCategories.hasOwnProperty(key)) {
        this.streamData.push({
          name: key,
          data: [0, ...this.streamValueCategories[key]]
        });
      }
    }
  }

  ngOnDestroy() {
    this.accountsAndCategories$.unsubscribe();
    this.snapshot$.unsubscribe();
  }
}
