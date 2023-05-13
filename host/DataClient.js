import {EventListener} from './EventListener.js';
import WebSocket from 'ws';

export class DataClient {

  ws;
  eventListeners = [];

  constructor(ws){
    this.ws = ws;
  }

  addEventListener(eventName, eventHandler){
    this.eventListeners.push(new EventListener(this.ws, eventName).listen(eventHandler));
  }

}
