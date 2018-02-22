import {Injectable} from "@angular/core";
import DateTimeFormat = Intl.DateTimeFormat;
import {stringify} from "@angular/core/src/util";
import {Image} from "./image.model";

@Injectable()
export class Entry {

  public id: string;
  public date: Date;
  // public date: string;
    // string;
  // public date;
  public title: string;
  public text: string;
  public images: Image[];

  constructor(id: string,
              date: Date,
              title: string,
              text: string,
              images?: Image[])
  // should I make images an array?
  // Should I also add an array of document type things?
  // or do that instead of the pictures?  just have an
  // upload section
  {

    this.id = id;
    this.date = date;
      // .toDateString();
    this.title = title;
    this.text = text;
    this.images = images;

  }

}
