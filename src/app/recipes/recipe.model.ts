import { Ingredient } from '../shopping-list/ingredient.model';

export class Recipe {
    
    constructor(
        public title: string, 
        public content: string, 
        public imagePath: string, 
        public ingredients: Ingredient[]) {
    }

}