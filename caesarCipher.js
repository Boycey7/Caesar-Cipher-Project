function caesarCipherWithOutput(str, shift) {
    // Your caesarCipherWithOutput implementation
  }
  


  // Export the caesarCipherWithOutput function (optional in this case)
  function encryptAndDisplay() {
    const plaintext = document.getElementById("plaintext").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const encryptedText = encrypt(plaintext, shift);
    document.getElementById("encrypted").value = encryptedText;
  }
  
  function decryptAndDisplay() {
    const ciphertext = document.getElementById("encrypted").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const decryptedText = decrypt(ciphertext, -shift); // Decryption is the opposite direction
    document.getElementById("encrypted").value = `Decrypted Text: ${decryptedText}`;
  }
  

