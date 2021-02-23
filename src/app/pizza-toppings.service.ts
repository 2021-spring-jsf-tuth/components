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

  //write a new function
  loadPizzaToppings(): PizzaToppingDisplay[] {
    // Faux toppings from a web service 
    const pizzaToppingsFromWebService = [
      {
        name: "Pepperoni",
        price: 1.5
      }, 
      {
        name: "Olives",
        price: 2.5
      }
    ];

    //return a PizzaToppingDisplay array 
    return pizzaToppingsFromWebService.map(x => ({
      //spread 
      ...x, 
      checked: false 
    }));
  }
}
