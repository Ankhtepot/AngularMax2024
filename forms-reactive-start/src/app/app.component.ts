import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],[this.forbiddenEmails]),
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });

    this.signupForm.setValue({
      'userData': {
        'username': "Petr",
        'email': 'petr@test.com'
      },
      'gender': 'male',
      'hobbies': []
    })

    this.signupForm.patchValue({
      'userData': {
        'username': "Igor",
      },
    })
  }

  onSubmit() {
    console.log(this.signupForm.value)
    this.signupForm.reset();
    (<FormArray>this.signupForm.get('hobbies')).clear();
  }

  get controls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl) : { [s: string]: boolean } {
    const valid = this.forbiddenUsernames.indexOf(control.value) === -1;
    return valid ? null : {'nameIsForbidden': true};
  }

  forbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
