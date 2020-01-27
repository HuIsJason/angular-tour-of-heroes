import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroName'
})
export class HeroNamePipe implements PipeTransform {

  transform(name: string, isMale: boolean): string {
    let prefix: string = (isMale) ? 'Mr.' : 'Ms.';
    return `${prefix} ${name}`;
  }

}
