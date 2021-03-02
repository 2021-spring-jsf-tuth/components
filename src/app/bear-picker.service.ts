import { Injectable } from '@angular/core';


export interface BearPickerDisplay {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BearPickerService {

  constructor() { }

  loadBears(): BearPickerDisplay[] {

    // Faux toppings from a web service.
    const bearsFromWebService = [
      {
        name: "Brown"
      }
      , {
        name: "Black"
      }
      , {
        name: "Grizzly"
      }
      , {
        name: "Polar"
      }
    ];

    return bearsFromWebService;
  }
}
