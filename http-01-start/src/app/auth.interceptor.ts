import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
        }
      })
    );
  }
}
