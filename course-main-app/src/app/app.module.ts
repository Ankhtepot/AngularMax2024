import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { ErrorPageComponent } from './common/error-page/error-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-select-prompt/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
