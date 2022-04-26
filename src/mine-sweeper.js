const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1], 
 *  [2, 1, 1], 
 *  [1, 1, 1]  
 * ]
 */
function minesweeper(matrix) {
  const maxJ = matrix[0].length;
  const maxI = matrix.length;

  const getNeighbors = (i, j) => {
    let result = [];

    (i > 0 && j > 0) && result.push(matrix[i - 1][j - 1]);
    
    if(i > 0) {
      result.push(matrix[i - 1][j]);

      (j + 1 < maxJ) && result.push(matrix[i - 1][j + 1]);
    }

    if(j > 0) {
      result.push(matrix[i][j - 1]);
      
      (i + 1 < maxI) && result.push(matrix[i + 1][j - 1]);
    }

    (i + 1 < maxI && j + 1 < maxJ) && result.push(matrix[i + 1][j + 1]);

    (i + 1 < maxI) && result.push(matrix[i + 1][j]);
    (j + 1 < maxJ) && result.push(matrix[i][j + 1]);

    return result;    
  }
  
  const resultMatrix = [];

  matrix.map((row, i) => {
    const arr = [];
    
    for(let j = 0; j < row.length; j++) {
      const neighbors = getNeighbors(i, j);
      arr.push(neighbors.filter(item => item).length);
    }
    
    resultMatrix[i] = arr;
  });

  return resultMatrix;
}

module.exports = {
  minesweeper
};
