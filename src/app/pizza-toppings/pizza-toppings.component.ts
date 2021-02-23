import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {
//dependency injection
  constructor(private pizzaSvc: PizzaToppingsService) { }
availablePizzaToppings: PizzaToppingDisplay[]=[];
  
//angular life cycle function, gets called when the compnent is loaded and ready to display
ngOnInit(): void {
  this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
console.log(this.availablePizzaToppings);
  }

}
