import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsSubject = new BehaviorSubject<any[]>([]);
  posts$: Observable<any[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        shareReplay(1),
        catchError(err => {
          console.error(err);
          return of([]);
        })
      )
      .subscribe(posts => this.postsSubject.next(posts));
  }
}
