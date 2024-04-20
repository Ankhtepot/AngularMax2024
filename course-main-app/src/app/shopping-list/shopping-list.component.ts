import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient";
import {ShoppingListService} from "./shopping-list.service";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => this.ingredients = ingredients);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
