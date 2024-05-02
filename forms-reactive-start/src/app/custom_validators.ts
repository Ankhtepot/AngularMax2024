import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  static invalidProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
