import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || !Array.isArray(value) || value.length === 0 || !filterString || filterString === '') {
      return value;
    }

    return value.filter(item => {
      return item[propName] === filterString;
    });
  }
}
