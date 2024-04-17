import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe";
// import {RecipeService} from "../../recipe.service";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeIndex: number;

  constructor() {
  }

  ngOnInit(): void {
  }
}
