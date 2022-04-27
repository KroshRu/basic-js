const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let s=email.split("").reverse().join("");
  let k=s.indexOf('@');
  s=s.slice(0,k);
  return s.split("").reverse().join("");
}

module.exports = {
  getEmailDomain
};
