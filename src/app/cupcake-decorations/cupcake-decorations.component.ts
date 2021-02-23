import { Component, OnInit } from '@angular/core';
import { CupcakeDecorationsService, CupcakeDecorationDisplay } from '../cupcake-decorations.service';

@Component({
  selector: 'app-cupcake-decorations',
  templateUrl: './cupcake-decorations.component.html',
  styleUrls: ['./cupcake-decorations.component.css']
})
export class CupcakeDecorationsComponent implements OnInit {

    //magic dependency injection
  constructor(private cupcakeSvc: CupcakeDecorationsService) { }

  availableCupcakeDecorations: CupcakeDecorationDisplay[] = [];

  // angular lifecycle fxn that gets called when component is loaded and ready to display
  ngOnInit(): void {
      this.availableCupcakeDecorations = this.cupcakeSvc.loadCupcakeDecorations();
      console.log(this.availableCupcakeDecorations);
  }

  total = 0;

  calculateTotal() {
      this.total = this.availableCupcakeDecorations
      .filter(x => x.checked)
      .reduce(
          (acc, x) => acc + x.price
          , 0
      );
  }

}