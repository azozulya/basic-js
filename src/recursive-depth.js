const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {  
  calculateDepth(array, depth = 0) { 
    depth++;   
    const nextDepth = array.filter(item => Array.isArray(item));

    if(nextDepth.length === 0) 
      return depth;
         
    return this.calculateDepth(nextDepth.flat(), depth);    
  }                                                                                       
}

module.exports = {
  DepthCalculator
};
