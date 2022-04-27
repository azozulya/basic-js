const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  error: false,
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${ value } )`);
    return this;
  },
  removeLink(pos) {
    try {
      const item = this.result[pos - 1];
  
      if(item) {
        this.result.splice(pos - 1, 1);
      } else {
        this.error = true;
        this.result.length = 0;
        throw new Error("You can't remove incorrect link!");
      }
    } catch {
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const res = this.result.join('~~');

    if(this.error) {
      this.result.length = 0;
    }

    return res;
  }
};

module.exports = {
  chainMaker
};
