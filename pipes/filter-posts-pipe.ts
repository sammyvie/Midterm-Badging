import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPosts',
  standalone: true
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: any[], search: string): any[] {
    if (!search) return posts;
    return posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    );
  }
}
