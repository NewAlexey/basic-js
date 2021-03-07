const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let ans = "";
    members.forEach((item) => {
        if (typeof item === "string") {
            item = item.trim();
            ans += item[0];
        }
    });
    ans = ans.toUpperCase().split("").sort().join("");
    return ans;
};
