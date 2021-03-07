const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dt) {
    if (dt === undefined) return "Unable to determine the time of year!";
    let time = Date.parse(dt);
    if (isNaN(time) || dt.toString !== Date.prototype.toString) throw new Error("Error");
    else {
        let date = new Date(time);
        let month = date.getMonth();
        if (month >= 2 && month <= 4) return "spring";
        else if (month >= 5 && month <= 7) return "summer";
        else if (month >= 8 && month <= 10) return "autumn (fall)";
        else return "winter";
    }
};
