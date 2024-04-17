import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() onRecipeClicked = new EventEmitter<Recipe>();

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClicked() {
    this.router.navigate(['/recipes/new']);
  }
}
