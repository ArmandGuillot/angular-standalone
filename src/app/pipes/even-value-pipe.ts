import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue',
})
export class EvenValuePipe implements PipeTransform {

  transform(value: number[]): number[] {
    // let numbers: number[] = [];
    // for (let i = 0; i < value.length; i++) {
    //   if (value[i] % 2 == 0) {
    //     numbers.push(value[i]);
    //   }
    // }
    return value.filter((v) => v % 2 == 0);
  }
}
