import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(text: string, ): any {

    if (text.length < 30){
      return text;
    }
    else {
      return (text.substr(0, 30) + " . . .");
    }

  }
}
