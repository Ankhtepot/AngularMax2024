import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  @Output() onRecipeClicked = new EventEmitter<Recipe>();
  recipesChangedSubscription: Subscription;
  recipeDeletedSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    this.recipeDeletedSubscription = this.recipeService.recipeDeleted.subscribe((_: number) => {
      this.router.navigate(['recipes']);
    });
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
    this.recipeDeletedSubscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['recipes', 'new',]);
  }

}
