import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CupcakeDecorationsComponent } from './cupcake-decorations/cupcake-decorations.component';

@NgModule({
  declarations: [
    AppComponent,
    CupcakeDecorationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
