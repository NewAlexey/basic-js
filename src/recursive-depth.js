const CustomError = require("../extensions/custom-error");
let maxDepth = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr, curDepth = 1) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                maxDepth = this.calculateDepth(arr[i], curDepth + 1);
            }
        }
        maxDepth > curDepth ? (maxDepth = maxDepth) : (maxDepth = curDepth);
        let depth = maxDepth;
        maxDepth = 0;
        return depth;
    }
};