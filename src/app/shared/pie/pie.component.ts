import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"]
})
export class PieComponent implements OnInit, OnChanges {
  @Input()
  series;
  public chart: Chart;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: "Percentage Overview"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      }
    });
  }

  ngOnChanges() {
    if (this.series) {
      this.updateChart();
    }
  }

  updateChart(): void {
    if (!this.chart || !this.chart.ref) {
      return;
    }

    this.chart.ref.update(
      {
        series: this.series
      },
      true,
      true
    );
  }
}
