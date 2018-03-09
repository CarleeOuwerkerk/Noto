import {Injectable} from "@angular/core";

@Injectable()
export class Prompt {

  public promptText;

  constructor(promptText: string) {
    this.promptText = promptText;
  }
}
