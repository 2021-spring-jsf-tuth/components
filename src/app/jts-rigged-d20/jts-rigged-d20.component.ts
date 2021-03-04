import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jts-rigged-d20',
  templateUrl: './jts-rigged-d20.component.html',
  styleUrls: ['./jts-rigged-d20.component.css']
})
export class JtsRiggedD20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.roll();
  }

  value = 0;
  rerollLimit = 8;

  roll() {
    this.value = Math.floor(Math.random() * 20) + 1;
  }

  // rolls again if the initial roll is less than the set reroll limit
  riggedRoll() {
    this.roll();
    if (this.value < this.rerollLimit) {
      this.roll();
    }
  }

}
