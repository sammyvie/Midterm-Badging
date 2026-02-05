import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Observable, map } from 'rxjs';
import { ApiService } from '../../services/helpdesk.service';
import { TruncatePipe } from '../../pipes/truncate-pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  // 1. Ensure this matches your actual HTML filename
  templateUrl: './home.html',
  // 2. YOU WERE MISSING THIS LINE:
  styleUrls: ['./home.css'],
  imports: [CommonModule, UpperCasePipe, TruncatePipe]
})
export class Home {
  posts$: Observable<any[]>;

  constructor(private api: ApiService) {
    // Limits the display to the first 5 posts as per logic
    this.posts$ = this.api.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
