import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingDisplay } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // magic DI (dependency injection)
  constructor(private pizzaSvc: PizzaToppingsService) { }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // angular life cycle function, that gets called when the component is loaded and ready to display
  ngOnInit(): void {
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.availablePizzaToppings);
  }

  // this is a TS "getter" property OR calculated property
  get total() {
    return this.availablePizzaToppings.filter(x => x.checked).reduce((acc, x) => acc + x.price, 0);
  }

  checkAll() {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: true}));
  }

  uncheckAll() {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: false}));
  }

}
