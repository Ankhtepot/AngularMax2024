import {Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged : Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing : Subject<number> = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  constructor() { }

  getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) : Ingredient {
    return this.ingredients[index];
  }

  addIngredient(addedIngredient: Ingredient) {
    this.mergeIngredients([addedIngredient])
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(addedIngredients: Ingredient[]) {
    this.mergeIngredients(addedIngredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // Adds new ingredients if not in the list, add the amount if it is in the list
  private mergeIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      const index = this.ingredients.findIndex(i => i.name === ingredient.name);
      if (index === -1) {
        this.ingredients.push(ingredient);
      } else {
        this.ingredients[index].amount += ingredient.amount;
      }
    });
  }
}
