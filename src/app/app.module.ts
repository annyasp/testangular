import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TimerComponent } from './timer/timer.component';
import { BackgroundComponent } from './background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    TimerComponent,
    BackgroundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
