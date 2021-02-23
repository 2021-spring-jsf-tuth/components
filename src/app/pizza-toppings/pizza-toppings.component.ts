import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService, PizzaToppingDisplay } from '../pizza-toppings.service'; 

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI (dependency injection)... 
  // : = annotate 
  //Get our Pizza Service 
  constructor(private pizzaSvc: PizzaToppingsService) { }

  //array of pizzaToppings to put into HTML 
  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // Angular "life cycle" function, that gets called when the component is 
  // loaded and ready to display. 
  ngOnInit(): void {

    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.availablePizzaToppings);
  }

  total = 0; 
  
  calculateTotal() {
    this.total = this.availablePizzaToppings
    //filter only the checks 
    .filter(x => x.checked)
    //takes two parameters for reduce to sum the prices 
    .reduce(
      (acc, x) => acc + x.price  
      , 0 
    );

  }

}
