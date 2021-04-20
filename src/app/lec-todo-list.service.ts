import { Injectable } from '@angular/core';

export interface LecTodoListDisplay {
  name: string;
  checked: boolean
}

@Injectable({
  providedIn: 'root'
})
export class LecTodoListService {

  constructor() { }

  loadTodos(): LecTodoListDisplay[] {

    // Faux toppings from a web service.
    const lecTodoListFromWebService = [
      {
        name: "Buy Bounce House"
      }
      , {
        name: "Feed Cat"
      }
    ];

    return lecTodoListFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }
}
