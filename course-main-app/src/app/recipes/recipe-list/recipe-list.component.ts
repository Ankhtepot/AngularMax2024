import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  @Output() onRecipeClicked = new EventEmitter<Recipe>();

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    this.recipeService.recipeDeleted.subscribe((_: number) => {
      this.router.navigate(['recipes']);
    });
  }

  ngOnDestroy(): void {
    this.recipeService.recipesChanged.unsubscribe();
    this.recipeService.recipeDeleted.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['recipes', 'new',]);
  }

}
