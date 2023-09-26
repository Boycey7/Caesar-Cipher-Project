//reusing the logic for character shifting but in reverse  
// const caesarCipher = require('./encode');


function decode(str, shift) {
    return encode(str, -shift); // Use negative shift for decryption
}


function decodeText() {
    const encryptedText = document.getElementById("plaintext").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const decryptedText = decode(encryptedText, shift);
    document.getElementById("encrypted").value = decryptedText;
  }
  
// module.exports = decode;
// module.exports = caesarDecipher; // Export the caesarDecipher function