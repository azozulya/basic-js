const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) { console.log(names);
  return names.reduce((total, element) => {
    
    function checkArray(item){
      const inArray = total.includes(item);

      if(inArray) {
        const regexp = new RegExp(/\(\d\)/g);
        const match = item.match(regexp) || 0; 
          switch (match.length) {
            case 1:
              item = `${item}${match[0]}`;
              break;
            case 2 :
              item = `${item.replace(regexp, "")}(2)`;
              break;
            default:
              item = `${item}(1)`;
              break;
          }
        return checkArray(item);        
      }
      return item;
    };

    element = checkArray(element);    
    total.push(element);
    return total;
  }, []);
}

module.exports = {
  renameFiles
};
