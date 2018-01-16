import {Injectable} from "@angular/core";

@Injectable()
export class Entry {

  constructor(public id: string,
              public date: Date,
              public text: string,
              public imageUrl: string){

  }

}
