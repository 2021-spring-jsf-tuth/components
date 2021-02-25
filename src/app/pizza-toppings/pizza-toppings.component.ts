import { Component, OnInit } from '@angular/core';
import {PizzaToppingsService, PizzaToppingsDisplay} from '../pizza-toppings.service'; 

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

    // Magic DI (dependency injection)

    constructor(private pizzaSVC: PizzaToppingsService) { }

    availablePizzaToppings: PizzaToppingsDisplay[] = []; 

    // Angular lifecycle function. Called when component is loaded and ready 
    // to display 
    ngOnInit(): void {
        this.availablePizzaToppings = this.pizzaSVC.loadPizzaToppings(); 
        console.log(this.availablePizzaToppings); 
    }

    total =  0; // starting value

    calculateTotal() {
        this.total = 
            this.availablePizzaToppings
                .filter(x => x.checked)
                .reduce(
                    (acc, x) => acc + x.price
                    , 0
                )

    }

}
