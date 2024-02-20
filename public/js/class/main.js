import { eventsMain, eventsModal } from '../events/index.js'
export class Main{
constructor(){
    this.events();
}
      
        events(){
          eventsMain();
          eventsModal();
        }
       
      }
 