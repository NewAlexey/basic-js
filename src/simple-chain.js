const CustomError = require("../extensions/custom-error");

let arrResult = [];
const chainMaker = {
  getLength() {
    return arrResult.length;
  },
  addLink(value) {
    arrResult.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.getLength()) {
      arrResult = arrResult.filter((elem, index) => index != position - 1);
     } else {
      arrResult = [];
      throw new Error('Invalid remove position');
     }
     return this;
  },
  reverseChain() {
    arrResult.reverse();
    return this;
  },
  finishChain() {
    let result = arrResult.join('~~');
    arrResult = [];
    return result;
  }
};

module.exports = chainMaker;