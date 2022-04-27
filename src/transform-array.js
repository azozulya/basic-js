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
  try {
    if(!Array.isArray(arr) || !(arr instanceof Array))
      throw new Error("'arr' parameter must be an instance of the Array!");

    if(arr.length === 0)
      return arr;
    
    if(!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev'))
      return arr;
  
    const array= arr.reduce((res, item, index) => {
      switch (item) {
        case '--discard-next': {
          if(index + 1 < arr.length)
            arr.splice(index, 2);
          
          return res;
        }
        case '--discard-prev': {
          if(res.length > 0) 
            res.pop();
                  
          return res;
        }
        case '--double-next':{
          if(index + 1 < arr.length)
            return [...res, arr[index + 1]];
          
          return res;
        }
        case '--double-prev': {
          if(index === 0)
            return res;
  
          return [...res, arr[index - 1]];
        }
        default:
          return [...res, item];
      }
    }, []);

    return array;
  } catch {
     throw new Error("'arr' parameter must be an instance of the Array!");  
  }  
}

module.exports = {
  transform
};
