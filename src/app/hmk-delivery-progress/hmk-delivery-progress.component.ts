import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-hmk-delivery-progress',
  templateUrl: './hmk-delivery-progress.component.html',
  styleUrls: ['./hmk-delivery-progress.component.css']
})
export class HmkDeliveryProgressComponent implements OnInit {

  constructor(private _deliveryProgress: MatProgressSpinnerModule) { }

  startDeliveryProgressSpinner(){
    this._deliveryProgress.open();
  }

  ngOnInit(): void {
  }

}
