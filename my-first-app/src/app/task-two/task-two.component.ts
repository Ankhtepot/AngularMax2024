import { Component } from '@angular/core';

@Component({
  selector: 'task-two',
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.css'
})
export class TaskTwoComponent {
  userName = '';

  onResetUsername() {
    this.userName = '';
  }

  isUsernameEmpty() {
    return this.userName.trim().length === 0;
  }

  onUsernameInput(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
