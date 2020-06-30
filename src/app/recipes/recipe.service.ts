import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    title1: string = "The first recipe";
    content1: string =  "The content";
    imagePath1: string  = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT86U2zRmSeXtWCUXjLLNLaRMjgYpK6iCgPHmJBCJTy8or00oux&usqp=CAUg";
    ingredient1: Ingredient[] = [new Ingredient("bread", 1), new Ingredient ("apple", 2)];

    title2: string = "The second recipe";
    content2: string =  "The second content";
    imagePath2: string  = "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg";
    ingredient2: Ingredient[] = [new Ingredient("juice", 1), new Ingredient ("water", 4)];

    private recipes: Recipe[] = [
        new Recipe(this.title1, this.content1, this.imagePath1, this.ingredient1),
        new Recipe(this.title2, this.content2, this.imagePath2, this.ingredient2),
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        console.log("i'm here");
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}