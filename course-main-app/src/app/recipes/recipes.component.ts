import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
