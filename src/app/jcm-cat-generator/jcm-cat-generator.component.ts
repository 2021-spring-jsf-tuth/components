import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jcm-cat-generator',
  templateUrl: './jcm-cat-generator.component.html',
  styleUrls: ['./jcm-cat-generator.component.css']
})
export class JcmCatGeneratorComponent implements OnInit {

  constructor() { }

  cats = [
      {
        name: "rigby", 
        imgSrc: "cat-pics/rigby.png"
      },
      {
          name: "tank", 
          imgSrc: "cat-pics/tank.png"
      }
  ]

  currentCat = ""; 

  selectCat(catName : string) {
    console.log(catName); 
  }

  ngOnInit(): void {
  }

}
