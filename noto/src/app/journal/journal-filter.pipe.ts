import {Pipe, PipeTransform} from "@angular/core";
import {Entry} from "./entry.model";

@Pipe({
  name: 'journalFilter'
})
export class JournalFilterPipe implements PipeTransform {

  transform(entries: Entry[], [term]): any {

    let filteredArray: Entry[] = [];

    filteredArray = entries.filter(
      (entry: any) =>
        entry.text.toLowerCase().includes(term.toLowerCase()
          // ||
          // entry.date.toLowerCase().includes(term.toLowerCase())
          )
    );

    if (filteredArray.length < 1) {
      return entries;
    }

    return filteredArray;
  }
}
