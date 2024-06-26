import {Injectable} from '@angular/core';
import {Recipe} from "../models/recipe";
import {Ingredient} from "../models/ingredient";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeDeleted = new Subject<number>();
  private recipesSource: Recipe[] = [];

  // private recipesSource: Recipe[] = [
  //   new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Recipe('Big Fat Burger', 'What else you need to say', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]),
  //   new Recipe('A Test Recipe', 'This is simply a test 3', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     []),
  // ];

  constructor() {
  }

  get recipes(): Recipe[] {
    return this.recipesSource.slice();
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipesSource[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipesSource.push(recipe);
    this.recipesChanged.next(this.recipes)
  }

  setRecipes(recipes: Recipe[]) {
    this.recipesSource = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, mewRecipe: Recipe) {
    this.recipesSource[index] = mewRecipe;
    this.recipesChanged.next(this.recipes)
  }

  deleteRecipe(id: number) {
    this.recipesSource.splice(id, 1);
    this.recipesChanged.next(this.recipes);
    this.recipeDeleted.next(id);
  }
}
