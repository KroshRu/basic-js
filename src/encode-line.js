const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res='';
  for (let i=0;i<str.length;i++){
    let k=1;
    if (str[i]==str[i+1]){
       k++;
       i++;
       while (str[i]==str[i+1])
       {k++;i++;};
       res+=k+str[i];
    }
    else {res+=str[i];}
  }
  return res;
}

module.exports = {
  encodeLine
};
