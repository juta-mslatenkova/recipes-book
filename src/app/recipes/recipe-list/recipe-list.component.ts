import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  title1: string = "The first recipe";
  content1: string =  "The content";
  imagePath1: string  = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT86U2zRmSeXtWCUXjLLNLaRMjgYpK6iCgPHmJBCJTy8or00oux&usqp=CAUg";
  
  title2: string = "The second recipe";
  content2: string =  "The second content";
  imagePath2: string  = "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg";

  recipes: Recipe[] = [
    new Recipe(this.title1, this.content1, this.imagePath1),
    new Recipe(this.title2, this.content2, this.imagePath2),
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
