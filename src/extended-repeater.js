const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
    let ans = "";
    console.log(obj);
    let repeatTimes = obj["repeatTimes"] === undefined ? "1" : obj["repeatTimes"];
    let separator = obj["separator"] === undefined ? "+" : obj["separator"];
    let addition = obj["addition"] === undefined ? "" : obj["addition"];
    let additionRepeatTimes = obj["additionRepeatTimes"] === undefined ? "|" : obj["additionRepeatTimes"];
    let additionSeparator = obj["additionSeparator"] === undefined ? "1" : obj["additionSeparator"];
    for (let i = 0; i < repeatTimes; i++) {
        let strNew = "";
        if (additionRepeatTimes === "|") additionRepeatTimes = 1;
        for (let i = 0; i < additionRepeatTimes; i++) {
            strNew += addition + additionSeparator;
        }
        strNew = strNew.slice(0, strNew.length - additionSeparator.length);
        ans += str + strNew + separator;
    }
    ans = ans.slice(0, ans.length - separator.length);
    return ans;
};
