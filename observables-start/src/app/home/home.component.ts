import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customIntervalObservable: Observable<any> = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }

        count++;
      }, 1000);
    },);

    customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    this.intervalSubscription = customIntervalObservable
      .pipe(
        filter(data => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }))
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
        alert(error.message);
      }, () => {
        console.log('Completed!');
      });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
