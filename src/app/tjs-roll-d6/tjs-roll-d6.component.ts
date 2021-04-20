import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-roll-d6',
  templateUrl: './tjs-roll-d6.component.html',
  styleUrls: ['./tjs-roll-d6.component.css']
})
export class TjsRollD6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.roll();
  }

  value = 0;

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}
