import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Animal {
  name: string;
}

@Component({
  selector: 'app-cv-chips',
  templateUrl: './cv-chips.component.html',
  styleUrls: ['./cv-chips.component.css']
})
export class CvChipsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  animals: Animal[] = [
    {name: 'Lion'},
    {name: 'Panda'},
    {name: 'Dog'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.animals.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(animal: Animal): void {
    const index = this.animals.indexOf(animal);

    if (index >= 0) {
      this.animals.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}
