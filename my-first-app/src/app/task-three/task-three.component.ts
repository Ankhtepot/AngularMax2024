import { Component } from '@angular/core';

@Component({
  selector: 'task-three',
  templateUrl: './task-three.component.html',
  styleUrl: './task-three.component.css'
})
export class TaskThreeComponent {
  paragraphShown : boolean = false;
  clicked : number = 0;
  logs = [];

  onButtonClick() {
    this.paragraphShown = !this.paragraphShown;
    this.clicked++;
    this.logs.push(new Date());
  }

  getBackgroundColor() {
    return this.clicked >= 5 ? 'blue' : 'transparent';
  }
}
