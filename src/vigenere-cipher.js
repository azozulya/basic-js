const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 *  A-Z (65-90), a-z (97-122)
 */

class VigenereCipheringMachine {
  constructor(reverse = true, direct = true){
    this.isReverse = reverse;
    this.direct = direct;
  }

  encrypt(message, key) {
    if(!(message && key))
      throw new Error('Incorrect arguments!');

    let result = '';
    let j = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for(let i = 0; i < message.length; i++) {
      const letter = message[i];
      const letterCode = letter.charCodeAt();

      if(letterCode >= 65 && letterCode <= 90) { // except space and other non-alphabetic characters
        if(!key[j]) 
          j = 0;

        const keyCode = key[j].charCodeAt();
        j++;
  
        result += String.fromCharCode((letterCode + keyCode) % 26 + 65); // because the Vigenere cipher starts with 0

      } else {
        result += letter;
      }
    }

    return !this.isReverse && this.direct ? result.split('').reverse().join('') : result;    
  }

  decrypt(encryptedMessage, key) {
    if(!(encryptedMessage && key))
      throw new Error('Incorrect arguments!');

    let result = '';
    let j = 0;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for(let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];

      const letterCode = letter.charCodeAt();

      if(letterCode >= 65 && letterCode <= 90) { // except space and other non-alphabetic characters
        if(!key[j]) 
          j = 0;

        const keyCode = key[j].charCodeAt();
        j++;        
        const code = (letterCode - keyCode + 26) % 26 + 65; //he offset of A is 0, the offset of B is 1 etc.

        result += String.fromCharCode(code); // because the Vigenere cipher starts with 0

      } else {
        result += letter;
      }
    }
    return !this.isReverse && this.direct ? result.split('').reverse().join('') : result;  
  }

  
}

module.exports = {
  VigenereCipheringMachine
};
