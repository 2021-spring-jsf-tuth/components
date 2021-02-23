import { Injectable } from '@angular/core';

export interface PizzaToppingsDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingsService {

  constructor() { }

  loadPizzaToppings(): PizzaToppingsDisplay[] {
    const pizzaToppingsFromWebService = [
      {
        name: "pepperoni"
      , price: 1.5
      }
      , {
        name: "olive"
        , price: 2.5
      }
      
    ];
    
    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }
}
