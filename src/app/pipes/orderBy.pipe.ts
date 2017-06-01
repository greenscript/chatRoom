import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { MomentModule } from 'angular2-moment';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  constructor() {}


  transform(obj: any) {
    if (obj) {
      let a = obj.sort(dateSort)

      console.log(a)

      return a
    }

  }
}


function dateSort(a, b) {
  let firstDate: any = new Date(a.date)
  let secondDate: any = new Date(b.date)

  return firstDate > secondDate ? -1 : firstDate<secondDate ? 1 : 0;
}
