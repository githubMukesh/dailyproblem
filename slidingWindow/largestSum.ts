/* find the largest sum of five consecutive elements.

[ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
 sum = 0;
 left = 0;
 right = key;
 Iterate the elment



*/

const findLargestSum = (arr, noOfElements) => {
  let maxSum = -1;
  let windowSum = 0;
  let windowStart = 0;
  debugger;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd - windowStart + 1 === noOfElements) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart = windowStart + 1;
    }
  }
  return maxSum;
};

let result = findLargestSum([5, 7, 1, 4, 3, 6, 2, 9, 2], 1);

console.log(result);
