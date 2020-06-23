import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    title1: string = "The first recipe";
    content1: string =  "The content";
    imagePath1: string  = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT86U2zRmSeXtWCUXjLLNLaRMjgYpK6iCgPHmJBCJTy8or00oux&usqp=CAUg";
    
    title2: string = "The second recipe";
    content2: string =  "The second content";
    imagePath2: string  = "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg";

    private recipes: Recipe[] = [
        new Recipe(this.title1, this.content1, this.imagePath1),
        new Recipe(this.title2, this.content2, this.imagePath2),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}