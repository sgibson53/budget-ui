import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import { StreamgraphComponent } from "./streamgraph/streamgraph.component";
import * as more from "highcharts/highcharts-more.src";
import * as exporting from "highcharts/modules/exporting.src";
import * as steamgraph from "highcharts/modules/streamgraph.src";
import * as seriesLabel from "highcharts/modules/series-label.src";
import { PieComponent } from "./pie/pie.component";
import { CoreModule } from "./core/core.module";
import { SplashComponent } from "./splash/splash.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StreamgraphComponent,
    PieComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HIGHCHARTS_MODULES,
      useFactory: () => [more, exporting, steamgraph, seriesLabel]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
