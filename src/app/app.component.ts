import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: any = [];
  chartData :any=[];
  constructor(){

  }
  ngOnInit(): void {
    this.chartData = [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ];
    this.renderchart();
  }
  renderchart(){
    console.log("fusion chart version",FusionCharts.version)
    this.dataSource = {
      "chart": {
        "captionFontBold": "1", 
        "captionAlignment": "left",
        "showLegend": "1",
        "legendPosition": "bottom-left",
        "sNumberSuffix": "%",

        "sYAxisMinValue": "0",
        "sYAxisMaxValue": "100",

        "numVisiblePlot": "8",

        "divlineColor": "#E5E5E5",
        "divLineThickness": "2",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",

        "crossLineColor": "none",
        "borderColor": "#D40511",
        "borderThickness": "4",
        "borderAlpha": "80",
        "theme": "fusion"
      },
      
      "data":this.chartData
  }

}
}
