import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './bind_task/game-control/game-control.component';
import { OddComponent } from './bind_task/odd/odd.component';
import { EvenComponent } from './bind_task/even/even.component';
import {BindTaskComponent} from "./bind_task/bind_task.component";
import { BindTaskCourseComponent } from './bind_task_course/bind-task-course.component';
import { EvenCourseComponent } from './bind_task_course/even-course/even-course.component';
import { GameControlCourseComponent } from './bind_task_course/game-control-course/game-control-course.component';
import { OddCourseComponent } from './bind_task_course/odd-course/odd-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BindTaskComponent,
    BindTaskCourseComponent,
    EvenCourseComponent,
    GameControlCourseComponent,
    OddCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
