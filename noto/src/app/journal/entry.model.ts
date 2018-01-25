import {Injectable} from "@angular/core";

@Injectable()
export class Entry {

  public id: string;
  public date: string;
  public text: string;
  public imageURL?: string;

  constructor(id: string,
              date: Date,
              text: string,
              imageURL?: string)
  // should I make images an array?
  {

    this.id = id;
    this.date = date.toDateString();
    this.text = text;
    this.imageURL = imageURL;

  }

}
