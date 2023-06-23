
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {})
}

function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequency;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      
    }
  }
}