import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doing-math',
  templateUrl: './doing-math.component.html',
  styleUrls: ['./doing-math.component.css']
})
export class DoingMathComponent implements OnInit {


  numberOne: number =15;
  numberTwo: number =3;
  numberThree: number = 10;
//killAssist: number = 0;
  kda: number = 0;
  newKda: number = 0;

  calculateKda = () => {

    this.kda = this.numberOne + this.numberTwo;
    this.newKda = this.kda / this.numberThree;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
