import { eventsMain, eventsModal, eventInputFile } from "../events/index.js";
import { detectWindow } from '../helper/detectWindow.js';
import { loginForm,registerForm } from '../auth/index.js';
export class Main {
  constructor() {
    this.window = detectWindow();
    this.login();
    this.events();
  }
  login(){
    if( this.window === '/html/login.html'){
      loginForm();
    }

    if( this.window === '/html/register.html'){
      registerForm();
    }
  }
  events() {
    if( this.window === '/'){
      eventsMain();
      eventsModal();
      eventInputFile();
    }
  }
}
