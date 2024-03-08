import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd-course',
  templateUrl: './odd-course.component.html',
  styleUrl: './odd-course.component.css'
})
export class OddCourseComponent {
  @Input() number: number;

}
