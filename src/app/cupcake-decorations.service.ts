import { Injectable } from '@angular/core';

export interface CupcakeDecorationDisplay {
    name: string;
    price: number;
    checked: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CupcakeDecorationsService {

  constructor() { }

  loadCupcakeDecorations() : CupcakeDecorationDisplay[] {

    //decorations
    const cupcakeDecorationsFromWebService = [
        {
            name: "Chocolate Flowers"
            , price: 15
        }
        , {
            name: "Mermaid Sprinkles"
            , price: 12
        }
    ];
    
  return cupcakeDecorationsFromWebService.map(x => ({
      ...x
      , checked: false
  }));
  }
}