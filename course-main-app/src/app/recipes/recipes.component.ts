import {Component, Input} from '@angular/core';
import {Recipe} from "../models/recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  @Input() selectedRecipe: Recipe = null;

}
