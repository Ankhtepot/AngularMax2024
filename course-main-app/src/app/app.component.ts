import { Component } from '@angular/core';
import {Constants} from "./common/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-main-app';
  selectedFeature = Constants.RECIPES;

  featureSelected(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }

  protected readonly Constants = Constants;
}
