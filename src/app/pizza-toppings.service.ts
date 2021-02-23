import { Injectable } from '@angular/core';
export interface PizzaToppingDisplay{
  //data for the view
  name: string;
  price: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingsService {

  constructor() { }

  loadPizzaToppings(): PizzaToppingDisplay[]{//will return a pizza toppings display
    const pizzaToppingsFromWebService=[
      {name: "Pepperoni", price:1.5},
        {name:"Olives", price: 2.5}
    ];
    return pizzaToppingsFromWebService.map(x =>({
      ...x,
      checked: true
  }))

  }
}
