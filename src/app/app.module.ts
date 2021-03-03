import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ReservationDateComponent } from './reservation-date/reservation-date.component';
import { JhProgressBarComponent } from './jh-progress-bar/jh-progress-bar.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { KkhSnackbarComponent } from './kkh-snackbar/kkh-snackbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TjsRollD6Component } from './tjs-roll-d6/tjs-roll-d6.component';
import { TjsSquaredComponent } from './tjs-squared/tjs-squared.component';

import { MatSliderModule } from '@angular/material/slider';
import { HmkDeliveryProgressComponent } from './hmk-delivery-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    KkhSnackbarComponent,
    TjsSquaredComponent,
    ReservationDateComponent,
    TjsRollD6Component,
    TjsSquaredComponent,
    JhProgressBarComponent,
    HmkDeliveryProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
