import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitarPalavras'
})
export class LimitarPalavrasPipe implements PipeTransform {
  transform(value: string, limite:number): string {
    if(value.length <= limite){
      return value;
    } else{
      return value.substring(0, limite) + "...";
    }

  }
}
