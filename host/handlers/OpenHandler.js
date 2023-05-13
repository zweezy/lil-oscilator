import {Handler} from './Handler.js';

export class OpenHandler extends Handler {

  subscriptionRequests;
  ws;

  constructor(ws, subscriptionRequests){
    super();
    this.subscriptionRequests = subscriptionRequests;
    this.ws = ws;
  }

  async handle(data){
    let result;
    for(const subscriptionRequest of this.subscriptionRequests) {
      result = await this.ws.send(JSON.stringify(subscriptionRequest));
    }
  }

}
