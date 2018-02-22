import {Injectable} from "@angular/core";

@Injectable()
export class Image {

  public id: string;
  public description: string;
  public url: string;

  constructor(id: string,
              description: string,
              url: string,)
  {

    this.id = id;
    this.description = description;
    this.url = url;
  }
}
