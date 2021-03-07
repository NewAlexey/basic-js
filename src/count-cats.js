const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let count = 0;
    arr.forEach(item => {
     item.forEach(elem => {
      if (elem === '^^') count++;
     });
    });
    return count;
};
