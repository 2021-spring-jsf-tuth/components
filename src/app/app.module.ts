import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ReservationDateComponent } from './reservation-date/reservation-date.component';
import { JhProgressBarComponent } from './jh-progress-bar/jh-progress-bar.component';
import { BearPickerComponent } from './bear-picker/bear-picker.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TjsD20RollerComponent } from './tjs-d20-roller/tjs-d20-roller.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { KkhSnackbarComponent } from './kkh-snackbar/kkh-snackbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TjsRollD6Component } from './tjs-roll-d6/tjs-roll-d6.component';
import { TjsSquaredComponent } from './tjs-squared/tjs-squared.component';

import { MatSliderModule } from '@angular/material/slider';

import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TjsD20RollerComponent,
    KkhSnackbarComponent,
    TjsSquaredComponent,
    ReservationDateComponent,
    TjsRollD6Component,
    TjsSquaredComponent,
    JhProgressBarComponent,
    BearPickerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRippleModule,
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
