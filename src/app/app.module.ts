import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TjsRollD6Component } from './tjs-roll-d6/tjs-roll-d6.component';
import { TjsSquaredComponent } from './tjs-squared/tjs-squared.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TjsRollD6Component,
    TjsSquaredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
