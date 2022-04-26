const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!( Array.isArray(members))) return false;
  let res=[];
  let k=0;
  for (let i=0;i<members.length;i++){
    
    if (typeof members[i]==='string'){
      let help=members[i].trim();
      res[k]=help[0].toUpperCase();
      k++;
     // for (let j=0;j<help.length;j++){
     //   if (typeof help[j][0]==='string'){
     //     res[k]=help[j][0].toUpperCase();
     //     k++;
     //     }
      
    }
  }

  res=res.sort();
  let result='';
  for (let i=0;i<res.length;i++){
    result+=res[i];
  }
  console.log(result);
  return result;
}

module.exports = {
  createDreamTeam
};
