const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.is_direction = direction;
}
  encrypt(message, key) {
    if (message.length <= 1) throw new Error();
    if (key.length <= 1) throw new Error();
    let upMessage = message.toUpperCase();
    let upKey = key.toUpperCase();
    let arr = [];
  
    let indexKey = 0;
    for (let i = 0; i < upMessage.length; i++) {
        let letterMessageCode = upMessage[i].charCodeAt(0);
        if (letterMessageCode >= 65 && letterMessageCode <= 90) {
            arr.push(String.fromCharCode(((letterMessageCode + upKey.charCodeAt(indexKey)) % 26) + 65));
            (indexKey === upKey.length - 1) ? (indexKey = 0) : indexKey++;
        } else arr.push(upMessage[i]);
    }
    if(this.is_direction == false) arr.reverse();
    return arr.join('');
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage.length <= 1) throw new Error();
    if (key.length <= 1) throw new Error();
    let upEncMessage = encryptedMessage.toUpperCase();
    let upKey = key.toUpperCase();
    let arr = [];
  
    let indexKey = 0;
    for (let i = 0; i < upEncMessage.length; i++) {
        let letterMessageCode = upEncMessage[i].charCodeAt(0);
        if (letterMessageCode >= 65 && letterMessageCode <= 90) {
            arr.push(String.fromCharCode(((letterMessageCode + 26 - upKey.charCodeAt(indexKey)) % 26) + 65));
            (indexKey === upKey.length - 1) ? (indexKey = 0) : indexKey++;
        } else arr.push(upEncMessage[i]);
    }
    if(this.is_direction == false) arr.reverse();
    return arr.join('');
  }
}

module.exports = VigenereCipheringMachine;