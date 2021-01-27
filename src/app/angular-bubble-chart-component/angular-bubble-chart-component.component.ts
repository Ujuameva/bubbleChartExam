import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-angular-bubble-chart-component',
  templateUrl: './angular-bubble-chart-component.component.html',
  styleUrls: ['./angular-bubble-chart-component.component.css']
})
export class AngularBubbleChartComponentComponent implements OnInit {

  private data = [
    { "country": "USA", "continent": "", "pop": 38, "gdpPercap": 48, "date": new Date("2020-07-01") },
    { "country": "USA", "continent": "", "pop": 8, "gdpPercap": 48, "date": new Date("2020-07-01") },
    { "country": "CHINA", "continent": "", "pop": 28, "gdpPercap": 38, "date": new Date("2020-07-08") },
    { "country": "KOREA", "continent": "", "pop": 18, "gdpPercap": 28, "date": new Date("2020-08-08") },
    { "country": "GERMANY", "continent": "", "pop": 63, "gdpPercap": 68, "date": new Date("2020-09-11") },
    { "country": "DENMARK", "continent": "", "pop": 23, "gdpPercap": 68, "date": new Date("2020-11-05") },
  ];
  private svg;
  private margin = { top: 10, right: 20, bottom: 30, left: 50 };
  private width = 800 - (this.margin.left + this.margin.right);
  private height = 600 - (this.margin.top + this.margin.bottom);

  constructor() { }

  ngOnInit(): void {

    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("#bubbleChart")
      .append("svg")
      .attr("width", this.width + (this.margin.left + this.margin.right))
      .attr("height", this.height + (this.margin.top + this.margin.bottom))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {

    // Create the X-axis scale & Draw the X-axis on the DOM
    const x = d3.scaleTime()
      .domain([new Date("2020-06-01"), new Date("2020-12-31")])
      .range([0, this.width]);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x));

    // Create the Y-axis scale & Draw the Y-axis on the DOM      
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);
    this.svg.append("g")
      .call(d3.axisRight(y));

    const z = d3.scaleLinear()
      .domain([0, 100])
      .range([1, 150]);

    // Create and fill the bars
    this.svg.append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d.date); })
      .attr("cy", function (d) { return y(d.gdpPercap); })
      .attr("r", function (d) { return z(d.pop); })
      .style("fill", "#69b3a2")
      .style("opacity", "0.7")
      .attr("stroke", "none")

  }

}
