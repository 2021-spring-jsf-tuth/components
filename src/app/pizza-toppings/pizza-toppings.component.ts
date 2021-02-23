import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingDisplay } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  constructor(private pizzaSvc: PizzaToppingsService) { }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

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

}
