import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-task-course',
  templateUrl: './bind-task-course.component.html',
  styleUrl: './bind-task-course.component.css'
})
export class BindTaskCourseComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 == 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
