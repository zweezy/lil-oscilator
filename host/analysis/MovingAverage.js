export class MovingAverage {

  entryList = [];
  windowSize = 10;
  movingAverage = null;

  constructor(){

  }

  calculateAverage(entryList){
    let sum = 0;
    for(const entry of entryList) {
      sum += Number.parseFloat(entry);
    }
    let average = Number.parseFloat((sum / entryList.length));
    return average;
  }

  //https://en.wikipedia.org/wiki/Moving_average
  calculateNewMovingAverage(previousMovingAverage, numEntries, oldEntry, newEntry){
    if(numEntries < this.windowSize){
      return;
    }
    if(!previousMovingAverage){
      previousMovingAverage = this.calculateAverage();
    }
    if(!oldEntry){
      oldEntry = 0;
    }
    let newMovingAverage = (previousMovingAverage + ((newEntry - oldEntry) / this.windowSize));
    return newMovingAverage;
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
    this.movingAverage = this.calculateAverage(this.entryList);
    return this.movingAverage;
  }

}
