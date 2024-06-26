import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../models/recipe";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(environment.recipesUrl, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(environment.recipesUrl)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        })
      }),
      tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
