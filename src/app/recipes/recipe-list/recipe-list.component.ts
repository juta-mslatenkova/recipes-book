import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class RecipeListComponent implements OnInit {
  title1: string = "The first recipe";
  content1: string =  "The content";
  imagePath1: string  = "https://dinnerthendessert.com/wp-content/uploads/2019/01/Belgian-Waffles-2-500x500.jpg";

  title2: string = "The second recipe";
  content2: string =  "The second content";
  imagePath2: string  = "https://dinnerthendessert.com/wp-content/uploads/2019/01/Belgian-Waffles-2-500x500.jpg";

  recipes: Recipe[] = [
    new Recipe(this.title1, this.content1, this.imagePath1),
    new Recipe(this.title2, this.content2, this.imagePath2),
  ];

  constructor() { }

  ngOnInit() {
  }
}
