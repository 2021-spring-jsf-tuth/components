import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ReservationDateComponent } from './reservation-date/reservation-date.component';
import { JhProgressBarComponent } from './jh-progress-bar/jh-progress-bar.component';
import { BearPickerComponent } from './bear-picker/bear-picker.component';
import { HmkDeliveryProgressComponent } from './hmk-delivery-progress.component';



import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TjsD20RollerComponent } from './tjs-d20-roller/tjs-d20-roller.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { KkhSnackbarComponent } from './kkh-snackbar/kkh-snackbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TjsRollD6Component } from './tjs-roll-d6/tjs-roll-d6.component';
import { TjsSquaredComponent } from './tjs-squared/tjs-squared.component';
import { MdmSlideToggleComponent } from './mdm-slide-toggle/mdm-slide-toggle.component';
import { JtsRiggedD20Component } from './jts-rigged-d20/jts-rigged-d20.component';

import { MatSliderModule } from '@angular/material/slider';
import { LalAdditionComponent } from './lal-addition/lal-addition.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TjsSquaredComponent,
    TjsD20RollerComponent,
    KkhSnackbarComponent,
    TjsSquaredComponent,
    ReservationDateComponent,
    TjsRollD6Component,
    TjsSquaredComponent,
    JhProgressBarComponent,
    MdmSlideToggleComponent,
    JhProgressBarComponent,
    JtsRiggedD20Component,
    BearPickerComponent,
    LalAdditionComponent,
    HmkDeliveryProgressComponent,
    MatProgressSpinnerModule,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
