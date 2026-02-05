import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, map } from 'rxjs';
import { ApiService } from '../../services/helpdesk.service';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.css'], // Ensure this file exists in the same folder
  imports: [
    CommonModule,
    FormsModule,
    UpperCasePipe,
    TruncatePipe
  ]
})
export class Services {
  // Bound to the input field in the HTML
  search: string = '';

  // Stream of search terms to reactively filter the posts
  private search$ = new BehaviorSubject<string>('');

  // The filtered observable that the HTML subscribes to via | async
  posts$: Observable<any[]>;

  constructor(private api: ApiService) {
    /**
     * combineLatest takes the latest data from your API and the
     * latest search term, then runs the filtering logic whenever
     * either one changes.
     */
    this.posts$ = combineLatest([this.api.posts$, this.search$]).pipe(
      map(([posts, searchTerm]) => {
        const lowerTerm = searchTerm.toLowerCase();

        return posts.filter(post =>
          post.title.toLowerCase().includes(lowerTerm) ||
          post.body.toLowerCase().includes(lowerTerm)
        );
      })
    );
  }

  /**
   * Triggered by (ngModelChange) in the template.
   * We push the new string into our search$ stream.
   */
  onSearchChange(value: string): void {
    this.search$.next(value);
  }
}
