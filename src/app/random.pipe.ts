import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'random',
  pure: false
})

export class RandomPipe implements PipeTransform {

  transform(input: Post[], desiredCategory) {
    let output: Post[] = []
    for(let i = 0; i < input.length; i++) {
      if (input[i].category === "Random") {
        output.push(input[i]);
      }
    }
    return output;
  }

}
