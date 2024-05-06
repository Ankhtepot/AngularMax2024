import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit: number = 10, anotherArg: string = ''): string {
    let baseString: string = value.toString();
    let result: string = baseString.substring(0, limit) + anotherArg;

    if (baseString.length > limit) {
      return result + ' ...';
    }

    return result;
  }

}
