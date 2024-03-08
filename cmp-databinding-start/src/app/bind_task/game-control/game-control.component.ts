import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() onGameStarted = new EventEmitter<void>();
  @Output() onGameStopped = new EventEmitter<void>();
  @Output() onGameTick = new EventEmitter<number>();
  count: number = 0;
  Timer = null;
  odds: number[] = [];
  evens: number[] = [];
  isStopping: Boolean = false;

  startGame() {
    this.onGameStarted.emit();
    this.Timer = setInterval(() => {
      this.count++;
      this.onGameTick.emit(this.count);
      console.log(this.count);

      if (this.count % 2 === 0) {
        this.evens.push(this.count);
      } else {
        this.odds.push(this.count);
      }
    }, 1000);
  }

  stopGame() {
    clearInterval(this.Timer);
    this.Timer = null;
    this.onGameStopped.emit();
    this.count = 0;

    this.isStopping = true;

    this.odds = [];
    this.evens = [];
    let stopTimer = setInterval(() => {
      this.isStopping = false;
      clearInterval(stopTimer);
    }, 1000);
  }
}
