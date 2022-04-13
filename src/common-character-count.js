const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  return [...str1].reduce((result, letter) => { 
    if(str2.search(letter) >= 0) {
      result++;
      str2 = str2.replace(letter, '');
    }
    return result;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
