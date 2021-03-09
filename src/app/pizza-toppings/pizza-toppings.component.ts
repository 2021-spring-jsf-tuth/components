import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingDisplay } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

    // private pizzaSvc: PizzaToppingsService; 

  // Magic DI (dependency injection)...
  constructor(
      // This is the automatic property, because it's private
      private pizzaSvc: PizzaToppingsService
    //   injectedPizzaSvc: PizzaToppingsService
    ) { 
        // this.pizzaSvc = injectedPizzaSvc; 
    }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // Angular "life cycle" function, that gets called when the component is
  // loaded and ready to display.
  ngOnInit(): void {  

    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.availablePizzaToppings);
  }
  // This is a TS "getter" properties... Or "calculated" property...

  get total() {
    return this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      )
    ; 
  }

  checkAll() {

    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: true }));
  }

  uncheckAll() {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: false }));
  }

}
