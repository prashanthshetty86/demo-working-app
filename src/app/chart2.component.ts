import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart2',
  //template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: './chart2.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class Chart2Component {
  @ViewChild('myCanvas') canvas: ElementRef;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvas.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'green');
    this.lineChartColors = [
      {
        backgroundColor: gradient,
      },
    ];
  }
}
