import {Handler} from './Handler.js';
import {MovingAverage} from '../analysis/MovingAverage.js';
import {StandardDeviation} from '../analysis/StandardDeviation.js';

export class MessageHandler extends Handler {

  movingAverage;
  standardDeviation;
  tradeHistory = [];
  balances = {
    btc: {
      quantityOwned: 0,
      avgRatePurchased: 0
    },
    eth: {
      quantityOwned: 0,
      avgRatePurchased: 0
    }
  }

  buys = [];
  sells = [];

  constructor(){
    super();
    this.movingAverage = new MovingAverage();
    this.standardDeviation = new StandardDeviation();
  }

  buy(rate, quantity){
    //redacted ;)
  }

  sell(rate, quantity){
    //redacted ;)
  }

  calculateAverageRate(tradeHistory){
    let sum = 0;
    for(const trade of tradeHistory) {
      sum += Number.parseFloat(trade.rate);
    }
    let averageRate = Number.parseFloat((sum / tradeHistory.length));
    return averageRate;
  }

  separateTradesIntoSeparateLists(tradeHistory){
    //redacted ;)
  }

  calculateAverage(entryList){
    let sum = 0;
    for(const entry of entryList) {
      sum += Number.parseFloat(entry);
    }
    let average = Number.parseFloat((sum / entryList.length));
    return average;
  }

  calculateProfit(tradeHistory){
    //redacted ;)
  }

  handle(data){
    //redacted ;)
  }

}
