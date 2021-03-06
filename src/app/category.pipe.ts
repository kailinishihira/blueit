import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'category',
  pure: false
})

export class CategoryPipe implements PipeTransform {

  transform(input: Post[], desiredCategory) {
    let output: Post[] = []
    for(let i = 0; i < input.length; i++) {
      if (input[i].category === "Popular") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
