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
  let result = '';
  let idx = 0;

  while(idx < str.length) { 
    if(idx === str.length - 1) 
      return result + str[idx];
    
    const letter = str[idx]; 
    const regexp = new RegExp(`${letter}+`); 
    const matchLength = str.match(regexp)[0].length;

    result += matchLength > 1 ? matchLength + letter : letter;    
    idx += matchLength; 
  }
  return result;
}

module.exports = {
  encodeLine
};
