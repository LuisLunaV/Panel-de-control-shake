import { loginForm,registerForm } from '../auth/index.js';
import { eventsMain, eventsModal, eventInputFile } from "../events/index.js";
import { detectWindow, validateSessionToken } from '../helper/index.js'
import { loadedComponents } from '../util/index.js'
export class Main {
  constructor() {
    this.window = detectWindow();
    this.loader = loadedComponents();
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
      validateSessionToken();
      eventsMain();
      eventsModal();
      eventInputFile();
    }
  }
}
