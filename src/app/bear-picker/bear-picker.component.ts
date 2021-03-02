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

  ngOnInit(): void {

    this.availableBears = this.bearSvc.loadBears();
    console.log(this.availableBears);
  }

}
