import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bia-d8-roller',
  templateUrl: './bia-d8-roller.component.html',
  styleUrls: ['./bia-d8-roller.component.css']
})
export class BiaD8RollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.rollD8();
  }

  value: number;

  rollD8() {
    this.value = Math.floor(Math.random() * 8) + 1;
  }

}
