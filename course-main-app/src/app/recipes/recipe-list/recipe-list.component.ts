import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test 3', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  ];
  @Output() onRecipeClicked = new EventEmitter<Recipe>();


  onRecipeSelected(recipe: Recipe) {
    this.onRecipeClicked.emit(recipe);
  }
}
