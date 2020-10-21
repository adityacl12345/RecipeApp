import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    getIngredient(index: number){
        return this.ingredients[index];
    }
    getIngredients(){
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
    }

    updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
    }
    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
    }
}