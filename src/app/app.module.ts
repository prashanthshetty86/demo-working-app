import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { Chart1Component } from './chart1.component';
import { Chart2Component } from './chart2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule],
  declarations: [AppComponent, Chart1Component, Chart2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
