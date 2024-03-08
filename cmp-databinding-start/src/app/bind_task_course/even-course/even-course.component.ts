import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-even-course',
  templateUrl: './even-course.component.html',
  styleUrl: './even-course.component.css'
})
export class EvenCourseComponent {
  @Input() number: number;

}
