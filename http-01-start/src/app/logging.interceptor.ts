import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Outgoing request');
    console.log(request.url);
    console.log(request.headers);
    return next.handle(request).pipe(
      tap(event => {
        console.log('Incoming response');
        console.log(event);
      })
    );
  }
}
