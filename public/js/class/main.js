import { eventsMain, eventsModal, eventInputFile } from "../events/index.js";
export class Main {
  constructor() {
    this.events();
  }
  events() {
    eventsMain();
    eventsModal();
    eventInputFile();
  }
}
