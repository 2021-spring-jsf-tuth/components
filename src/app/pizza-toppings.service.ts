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

    // Faux toppings from a web service.
    const pizzaToppingsFromWebService = [
      {
        name: "Pepperoni"
        , price: 1.5
      }
      , {
        name: "Olives"
        , price: 2.5
      }, {
          name: "Mushrooms"
          , price: 3.15
      }
      , {
        name: "Mushrooms"
        , price: 3.15 
      }
    ];
    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }

}
