1 method
const largestNumber = arr => arr.every(x => x === arr[0]) ? (arr[0] ? ('' + arr[0]).repeat(arr.length) : '0') : (arr.map(String).sort((a, b) => (b + a) - (a + b)).join``);


2 method
function largestNumber(nums) {
  const strNums = nums.map(String);
  strNums.sort((a, b) => (b + a).localeCompare(a + b));
  const result = strNums.join('');
  return result[0] === '0' ? '0' : result;
}

