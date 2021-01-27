import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularBubbleChartComponentComponent } from './angular-bubble-chart-component/angular-bubble-chart-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularBubbleChartComponentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
