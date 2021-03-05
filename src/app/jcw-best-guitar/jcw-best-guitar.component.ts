import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jcw-best-guitar',
  templateUrl: './jcw-best-guitar.component.html',
  styleUrls: ['./jcw-best-guitar.component.css']
})
export class JcwBestGuitarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = "Favorite Guitar";

  findOutJoesFavoriteGuitar() {
    this.value = "Fender Stratocastor";
  }
}
