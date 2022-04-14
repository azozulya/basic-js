const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, arr, idxX) => {    
      arr.forEach((n, idxY) => {
        (idxX === 0 || matrix[idxX - 1][idxY] > 0) && (sum +=n);
      });
      return sum;    
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
