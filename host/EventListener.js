export class EventListener {

  ws;
  eventName;

  constructor(ws, eventName){
    this.ws = ws;
    this.eventName = eventName;
  }

  listen(eventHandler){
    this.ws.on(this.eventName, (data) => {
      eventHandler.handle(data);
    });
  }

}
