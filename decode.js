//reusing the logic for character shifting but in reverse  
// const caesarCipher = require('./encode');

function decrypt(str, shift) {
    return encrypt(str, -shift); // Decryption is just shifting in the opposite direction
}

// module.exports = caesarDecipher; // Export the caesarDecipher function