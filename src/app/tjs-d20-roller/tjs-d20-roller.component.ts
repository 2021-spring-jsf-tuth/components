import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tjs-d20-roller',
  templateUrl: './tjs-d20-roller.component.html',
  styleUrls: ['./tjs-d20-roller.component.css']
})
export class TjsD20RollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.rollTheTwentySidedDie();
  }

  value: number;

  rollTheTwentySidedDie() {
    this.value = Math.floor(Math.random() * 20) + 1;
  }
}
