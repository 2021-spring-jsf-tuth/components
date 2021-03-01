import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-squared',
  templateUrl: './tjs-squared.component.html',
  styleUrls: ['./tjs-squared.component.css']
})
export class TjsSquaredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderValue = 0;

  get answer(): string {
    return (this.sliderValue * this.sliderValue).toLocaleString();
  }
}
