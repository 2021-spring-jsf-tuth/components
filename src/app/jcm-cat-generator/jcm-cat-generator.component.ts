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
            imgSrc: "./assets/cat-pics/rigby.png", 
        },
        {
            name: "tank", 
            imgSrc: "./assets/cat-pics/tank.png", 
        }
    ]; 

  currentCat = {}; 

  selectCat(catName : string) {

    this.currentCat = this.cats.filter(current => current.name == catName);

    let img = document.querySelector("#catImage"); 
    img.setAttribute("width", "250px");
    img.setAttribute("src", this.currentCat[0].imgSrc);
    
  }

  ngOnInit(): void {
  }

}
