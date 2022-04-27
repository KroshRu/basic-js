const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=[];
  let s=String(n);
  for (let i=0;i<s.length;i++){
    arr[i]=s.slice(0,i)+s.slice(i+1);
  }
  arr.sort().reverse();
  return(Number(arr[0]));
}

module.exports = {
  deleteDigit
};
