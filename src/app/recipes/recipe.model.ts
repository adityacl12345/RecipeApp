import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public cuisine: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, cuisine: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.cuisine = cuisine;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
