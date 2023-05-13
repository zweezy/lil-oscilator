import {DataClient} from './DataClient.js';
import {OpenHandler} from './handlers/OpenHandler.js';
import {MessageHandler} from './handlers/MessageHandler.js';
import {ErrorHandler} from './handlers/ErrorHandler.js';

import WebSocket from 'ws';

let serverAddress = 'redacted ;)';
let ws;
let dataClient;

function connect(){
  //redacted ;)
}

function listen(){
  let subscriptionRequests = [
    //redacted ;)
  ];
  dataClient.addEventListener('open', new OpenHandler(ws, subscriptionRequests));
  dataClient.addEventListener('message', new MessageHandler());
  dataClient.addEventListener('error', new ErrorHandler());
}

connect();
listen();
