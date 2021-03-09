import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { CvChipsComponent } from './cv-chips/cv-chips.component'; 
import { ReservationDateComponent } from './reservation-date/reservation-date.component';
import { JhProgressBarComponent } from './jh-progress-bar/jh-progress-bar.component';
import { BearPickerComponent } from './bear-picker/bear-picker.component';



import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LecTodoListComponent } from './lec-todo-list/lec-todo-list.component';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';
import { TjsD20RollerComponent } from './tjs-d20-roller/tjs-d20-roller.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'

import { KkhSnackbarComponent } from './kkh-snackbar/kkh-snackbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TjsRollD6Component } from './tjs-roll-d6/tjs-roll-d6.component';
import { TjsSquaredComponent } from './tjs-squared/tjs-squared.component';
import { MdmSlideToggleComponent } from './mdm-slide-toggle/mdm-slide-toggle.component';
import { JtsRiggedD20Component } from './jts-rigged-d20/jts-rigged-d20.component';

import { MatSliderModule } from '@angular/material/slider';
import { JcwBestGuitarComponent } from './jcw-best-guitar/jcw-best-guitar.component';
import { LalAdditionComponent } from './lal-addition/lal-addition.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { JcmCatGeneratorComponent } from './jcm-cat-generator/jcm-cat-generator.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    LecTodoListComponent,
    CvChipsComponent,
    TjsSquaredComponent,
    TjsD20RollerComponent,
    KkhSnackbarComponent,
    TjsSquaredComponent,
    ReservationDateComponent,
    TjsRollD6Component,
    TjsSquaredComponent,
    JhProgressBarComponent,
    JcwBestGuitarComponent,
    MdmSlideToggleComponent,
    JhProgressBarComponent,
    JtsRiggedD20Component,
    BearPickerComponent,
    LalAdditionComponent,
    JcmCatGeneratorComponent
  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ], 

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
