import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingsDisplay } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI(Dependency Injection)
  constructor(private pizzaSvc: PizzaToppingsService) { }

  availablePizzaToppings: PizzaToppingsDisplay[] = [];
  
  //Angular Life Cycle Function
  //gets called when component is loaded and ready to display
  ngOnInit(): void {
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
