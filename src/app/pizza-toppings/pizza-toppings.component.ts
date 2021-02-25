import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingDisplay } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI (dependency injection)...
  //
  // This uses TS automatic properties
  constructor(
    // This is the automatic property, because it has a scope specifier (the private)
    // pizzaSvc is an automatic typeScript property
    private pizzaSvc: PizzaToppingsService
  ) {

  }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // Angular "life cycle" function (ngOnInit()), that gets called when the component is
  // loaded and ready to display.
  ngOnInit(): void {

    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.availablePizzaToppings);
  }

  total = 0;

  calculateTotal() {
    this.total = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      )
      ;
  }

  checkAll() {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({
      ...x,
      checked: true
    }));
  }

  uncheckAll() {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({
      ...x,
      checked: false
    }));
  }
}
