import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom_validators";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  constructor() {
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName.bind(this)], [CustomValidators.invalidProjectNameAsync.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.statuses[1],)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
