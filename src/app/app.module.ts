import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FusionChartsModule } from "angular-fusioncharts";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { AppComponent } from './app.component';
FusionCharts.options['license']({ 
  key: 'YOUR_KEY',
   creditLabel: false 
  });
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FusionChartsModule,
    FlexLayoutModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
