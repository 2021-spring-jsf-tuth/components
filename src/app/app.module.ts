import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaTopingsComponent } from './pizza-topings/pizza-topings.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaTopingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
