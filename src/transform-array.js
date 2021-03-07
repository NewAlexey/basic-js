const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error')
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--double-next") {
            ans.push(arr[i + 1]);
        } else if (arr[i] === "--discard-next") {
            i++;
            ans.push(undefined);
        } else if (arr[i] === "--double-prev") {
            if (i > 0 && ans[ans.length - 1] !== undefined) ans.push(arr[i - 1]);
        } else if (arr[i] === "--discard-prev") {
            ans.splice(ans.length - 1, 1);
        } else ans.push(arr[i]);
    }
    return ans.filter((item) => item != undefined);
};
