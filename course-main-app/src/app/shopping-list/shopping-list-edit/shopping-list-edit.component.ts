import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {ShoppingListService} from "../shopping-list.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') form: NgForm;
  ingredientSelected: Subscription;
  editMode = false;
  editedIemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredientSelected = this.shoppingListService.startedEditing.subscribe((index) => {
      this.editMode = true;
      this.editedIemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.ingredientSelected.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }


}
