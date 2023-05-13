import {Handler} from './Handler.js';

export class ErrorHandler extends Handler {

  constructor(){
    super();
  }

  handle(data){
    console.log('ErrorHandler.handle(data), data = ', data);
    console.log('Error: %s', data);
  }

}
