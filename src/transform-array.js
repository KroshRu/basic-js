const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res=[];
  let k=0;
  for (let i=0;i<arr.length;i++){
    if (arr[i]==='--double-next') {res[k]=arr[i+1];k++;}
    else {
      if (arr[i]==='--double-prev') {res[k]=arr[i-1];k++;}
        else {
          if (arr[i]==='--discard-prev') {k--;}
            else {
              if (arr[i]==='--discard-next') {i++;}
                else {res[k]=arr[i];k++;}
            }
          }
      }
  }
  return res;  
}


module.exports = {
  transform
};
