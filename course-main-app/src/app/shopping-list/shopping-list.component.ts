import { Component } from '@angular/core';
import {Ingredient} from "../models/ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  onAddedIngredient(addedIngredient: Ingredient) {
    this.ingredients.push(addedIngredient);
  }
}
