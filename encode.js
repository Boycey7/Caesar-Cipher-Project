//Run tests to check the function

// Caesar Cipher Implementation
function encode(str, shift) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i]; // Get the current character in the input string
  
      if (char.match(/[a-zA-Z]/)) {
        // determine the shifted character
        const charCodeStart = char.toLowerCase() === char ? 97 : 65;
        const charIndex = char.charCodeAt(0) - charCodeStart;
        const shiftedIndex = ((charIndex + shift % 26) + 26) % 26;  // Calculate the shifted index
        char = String.fromCharCode(charCodeStart + shiftedIndex);  // Get the shifted character
      }
  
      result += char;  // Append the character to the result
    }
   
    console.log(`Encoded Text: ${result}`); // Output the encoded text
    return result;  // Return the shifted text
  }
  function encodeText() {
    const plaintext = document.getElementById("plaintext").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const encryptedText = encode(plaintext, shift);
    document.getElementById("encrypted").value = encryptedText;
}
  // module.exports = caesarCipher;  // Export the caesarCipher function