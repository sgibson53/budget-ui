import { Component, OnInit } from "@angular/core";
import { Chart, Highcharts } from "angular-highcharts";
const colors = Highcharts.getOptions().colors;

@Component({
  selector: "app-streamgraph",
  templateUrl: "./streamgraph.component.html",
  styleUrls: ["./streamgraph.component.scss"]
})
export class StreamgraphComponent implements OnInit {
  public chart: Chart;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: "streamgraph",
        marginBottom: 30,
        zoomType: "x"
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
        text: "monthly category amounts"
      },

      xAxis: {
        maxPadding: 0,
        type: "category",
        crosshair: true,
        categories: [
          "",
          "January 2018",
          "February 2018",
          "March 2018",
          "April 2018",
          "May 2018",
          "June 2018",
          "July 2018"
        ],
        labels: {
          align: "left",
          reserveSpace: false,
          rotation: 270
        },
        lineWidth: 0,
        tickWidth: 0
      },

      yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
      },

      legend: {
        enabled: false
      },

      plotOptions: {
        series: {
          // label: {
          //   // minFontSize: 5,
          //   // maxFontSize: 15,
          //   style: {
          //     color: "rgba(255,255,255,0.75)"
          //   }
          // }
        }
      },

      // Data parsed with olympic-medals.node.js
      series: [
        {
          name: "Emergency Savings",
          data: [100, 150, 250, 350, 350, 400, 500, 600]
        },
        {
          name: "Cash",
          data: [100, 150, 250, 350, 350, 400, 500, 600]
        },
        {
          name: "Silver",
          data: [100, 150, 250, 350, 350, 400, 500, 600]
        },
        {
          name: "Christmas",
          data: [100, 150, 250, 350, 350, 400, 500, 600]
        },
        {
          name: "Vacation",
          data: [100, 150, 250, 350, 350, 400, 500, 600]
        }
      ],

      exporting: {
        sourceWidth: 800,
        sourceHeight: 600
      }
    });
  }
}
