import {Component, EventEmitter, Output} from '@angular/core';
import {Constants} from "../constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onRecipesClick() {
    this.featureSelected.emit(Constants.RECIPES);
  }

  onShoppingListClick() {
    this.featureSelected.emit(Constants.SHOPPING_LIST);
  }
}
