import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PieComponent } from "./pie/pie.component";
import { StreamgraphComponent } from "./streamgraph/streamgraph.component";
import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import * as more from "highcharts/highcharts-more.src";
import * as exporting from "highcharts/modules/exporting.src";
import * as steamgraph from "highcharts/modules/streamgraph.src";
import * as seriesLabel from "highcharts/modules/series-label.src";

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [PieComponent, StreamgraphComponent],
  exports: [PieComponent, StreamgraphComponent],
  providers: [
    {
      provide: HIGHCHARTS_MODULES,
      useFactory: () => [more, exporting, steamgraph, seriesLabel]
    }
  ]
})
export class SharedModule {}
