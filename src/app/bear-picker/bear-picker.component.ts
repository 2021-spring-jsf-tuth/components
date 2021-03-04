import { Component, OnInit } from '@angular/core';
import { BearPickerService, BearPickerDisplay } from '../bear-picker.service';


@Component({
  selector: 'app-bear-picker',
  templateUrl: './bear-picker.component.html',
  styleUrls: ['./bear-picker.component.css']
})
export class BearPickerComponent implements OnInit {

  constructor(private bearSvc: BearPickerService) { }

  availableBears: BearPickerDisplay[] = [];
  selectedBear: string = null;
  showAngryDwight: boolean = null;

  ngOnInit(): void {

    this.availableBears = this.bearSvc.loadBears();
  }

  pickBear() {
    this.showAngryDwight = (this.selectedBear !== "Black");
  }

}
