import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Post} from "./models/Post";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  postsUpdated = new Subject();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: Post) {
    return this.http.post<{ name: string }>(
      environment.postsUrl,
      postData,
      {
        observe: 'response'
      })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams().set('print', 'pretty');
    searchParams = searchParams.append('custom', 'Hello');

    return this.http.get<{ [key: string]: Post }>(
      environment.postsUrl,
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello'
        }),
        params: searchParams
      }
    )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              const post = responseData[key];
              postsArray.push(new Post(post.title, post.content, key));
            }
          }
          return postsArray;
        }),
        catchError(error => {
          // Send to analytics
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      environment.postsUrl,
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log('All posts deleted');
      }
    }));
  }

  seedPosts(seedPosts: Post[]) {
    const promises = seedPosts.map(post => this.createAndStorePost(post));

    // Return a single promise that resolves when all post creation promises are resolved
    Promise.all(promises).then(() => {
      this.postsUpdated.next();
    }, error => {
      return error;
    });
  }
}
