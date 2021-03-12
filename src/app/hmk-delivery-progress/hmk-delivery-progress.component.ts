import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-hmk-delivery-progress',
  templateUrl: './hmk-delivery-progress.component.html',
  styleUrls: ['./hmk-delivery-progress.component.css']
})
export class HmkDeliveryProgressComponent implements OnInit {
  
  mode: 'determinate';
  value = 50;

  constructor() { }

  startDeliveryProgressSpinner(){
    //set the value the spinner will start at for determinate spinner, bind the data?
    this.value = 20;
    //now to start the spinner???
    //this._deliveryProgress.open();
  }

  ngOnInit(): void {
  }

}
