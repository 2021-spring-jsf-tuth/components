import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lal-addition',
  templateUrl: './lal-addition.component.html',
  styleUrls: ['./lal-addition.component.css']
})
export class LalAdditionComponent implements OnInit {

    numberOne = 75;
    numberTwo = 10;
    answer = 85;
    addNumbers = () => {
        this.answer = this.numberOne + this.numberTwo;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
