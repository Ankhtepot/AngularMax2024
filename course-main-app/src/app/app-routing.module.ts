import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ErrorPageComponent} from "./common/error-page/error-page.component";
import {NgModule} from "@angular/core";
import {RecipeStartComponent} from "./recipes/recipe-select-prompt/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipesEditComponent} from "./recipes/recipes-edit/recipes-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipesEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipesEditComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
