import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data) => this.errorMessage = data['message']);
  }
}
