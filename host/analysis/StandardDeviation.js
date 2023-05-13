export class StandardDeviation {

  constructor(){

  }

  entryList = [];
  windowSize = 10;
  standardDeviation = null;

  calculateAverage(entryList){
    let sum = 0;
    for(const entry of entryList) {
      sum += Number.parseFloat(entry);
    }
    let average = Number.parseFloat((sum / entryList.length));
    return average;
  }

  calculateVariance(entryList){//TODO: Don't get variance for whole list, get only what's in the rolling window;
    let sum = 0;
    let average = this.calculateAverage(entryList);
    for(const entry of entryList) {
      let difference = Number.parseFloat((entry - average));
      let differenceSquared = Math.pow(difference, 2);
      sum += differenceSquared;
    }
    let variance = Number.parseFloat((sum / entryList.length));
    return variance;
  }

  calculateStandardDeviation(variance){
    let standardDeviation = Number.parseFloat(Math.sqrt(variance));
    return standardDeviation;
  }

  //Removes elements at the beginning of list, until list length less than or equal to window size;
  pruneList(list, size){
    let oldEntry = null;
    while(list.length > size){
      oldEntry = list.shift();
    }
    return oldEntry;
  }

  handleNewEntry(newEntry){
    this.entryList.push(newEntry);
    this.pruneList(this.entryList, this.windowSize);
    let variance = this.calculateVariance(this.entryList);
    let standardDeviation = this.calculateStandardDeviation(variance);
    return standardDeviation;
  }

}
