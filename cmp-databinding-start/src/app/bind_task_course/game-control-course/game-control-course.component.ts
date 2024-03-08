import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control-course',
  templateUrl: './game-control-course.component.html',
  styleUrl: './game-control-course.component.css'
})
export class GameControlCourseComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: NodeJS.Timeout;
  lastNumber = 0;

  onStartGame() {
      console.log('Game started');
      this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
