import { Injectable } from '@angular/core';

export interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingsService {

  constructor() { }

  loadPizzaToppings(): PizzaToppingDisplay[] {

    // faux toppings from a web service
    const pizzaToppingsFromWebService = [
      {name: "Pepperoni", price: 1.5},
      {name: "Olives", price: 2.5}
    ];

    return pizzaToppingsFromWebService.map(x => ({...x, checked: false}));
  }
}
