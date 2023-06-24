
// function createFrequencyCounter(arr) {
//   return arr.reduce(function(acc, next) {
//     acc[next] = (acc[next] || 0) + 1;
//     return acc;
//   }, {})
// }

//alternative:
function createFrequencyCounter(arr) {
  let freqCounter = new Map();
  for (let el of arr) {
      if (freqCounter.has(el)) {
          freqCounter.set(el, freqCounter.get(el) + 1);
      } else {
          freqCounter.set(el, 1);
      }
  }
  return freqCounter;
}


function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequency;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequency = key;
      count = freqCounter[key];

    }
  }

  return +mostFrequency;
}


function convertAndValidateNumsArray(numsAsStrings) {
  let result = numsAsStrings.map(Number);
  
  if (!result.every(Number.isFinite)) {
    return new Error(
      `The value '${
        numsAsStrings[result.findIndex(Number.isNaN)]}' at index ${
          result.findIndex(Number.isNaN)} is not a valid number.`
    );
  }
  
  return result;
}

function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length
}

function findMedian(nums){
  // sort and get the middle element

  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median
}



module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
};
