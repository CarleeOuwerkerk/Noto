import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthService} from "../startup/auth.service";
import {Prompt} from "./prompt.model";

@Injectable()
export class PromptService {

  prompts: Prompt[];

  constructor(private http: Http,
              private authService: AuthService) {
    this.initPrompts();
  }

  initPrompts() {
    const token = this.authService.getToken();

    this.http.get('https://noto-a9051.firebaseio.com/prompts.json?auth=' + token)
      .subscribe(
        (response: Response) => {
                this.prompts = response.json();
        }
      );
  }
  getPrompt() {
      let randomPrompt = this.prompts[Math.floor(Math.random() * this.prompts.length)];
      return randomPrompt.promptText;
  }

}
