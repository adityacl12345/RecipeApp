import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){}
    recipes: Recipe[] = [
        new Recipe(
            'Paella', 
            'Spanish Cuisine',
            'Paella is a Spanish rice dish that includes different combinations of vegetables and meats, characteristically seasoned with saffron, but also has other spices depending on the recipe and area in Spain it comes from.',
            '../../assets/recipe1.jpg',
            [
                new Ingredient('Prawns', 5),
                new Ingredient('Rice', 1),
                new Ingredient('Tomatoes', 2),
            ]),
        new Recipe(
            'Chicken Biryani', 
            'Indian Cuisine',
            'Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.', 
            '../../assets/recipe2.jpg',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Chicken', 5),
                new Ingredient('Biryani Masala', 1),
            ])
    ];

    getRecipe(){
        return this.recipes;
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addIngtoSL(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;

    }
    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
    }
}