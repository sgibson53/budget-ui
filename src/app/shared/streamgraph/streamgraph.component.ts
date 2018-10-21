import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Chart, Highcharts } from "angular-highcharts";
const colors = Highcharts.getOptions().colors;

@Component({
  selector: "app-streamgraph",
  templateUrl: "./streamgraph.component.html",
  styleUrls: ["./streamgraph.component.scss"]
})
export class StreamgraphComponent implements OnInit, OnChanges {
  public chart: Chart;
  @Input()
  series;
  @Input()
  categories;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: "streamgraph",
        marginBottom: 30,
        zoomType: "x"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },

      // Make sure connected countries have similar colors
      colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3]
      ],

      title: {
        floating: true,
        align: "left",
        text: "Savings History"
      },
      subtitle: {
        floating: true,
        align: "left",
        y: 30,
        text: "historical view of amounts"
      },

      xAxis: {
        maxPadding: 0,
        type: "category",
        crosshair: true,
        labels: {
          align: "left",
          reserveSpace: false,
          rotation: 270
        },
        lineWidth: 0,
        tickWidth: 0
      },
      series: [],

      yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
      },

      legend: {
        enabled: false
      }
    });
  }

  ngOnChanges() {
    if (this.series && this.categories) {
      this.updateChart();
    }
  }

  updateChart() {
    if (!this.chart || !this.chart.ref) {
      return;
    }

    this.chart.ref.update(
      {
        xAxis: {
          categories: this.categories
        },
        series: this.series
      },
      true,
      true
    );
  }
}
