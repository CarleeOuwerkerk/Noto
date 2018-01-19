import {Injectable} from "@angular/core";

@Injectable()
export class Entry {

  public id: string;
  public date: string;
  public text: string;
  public imageUrl?: string;

  constructor(id: string,
              date: Date,
              text: string,
              imageUrl?: string){

    this.id = id;
    this.date = date.toDateString();
    this.text = text;
    this.imageUrl = imageUrl;

  }

}
