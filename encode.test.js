// // Import the caesarCipher function from the 'encode.js' file
// const caesarCipher = require('./encode');


// describe('Caesar Cipher Shifting', () => {

//   // Test 1: Shift the plaintext by 1 position
//   test('shift by 1', () => {
//     const plaintext = 'Hello World'; 
//     const expected = 'Ifmmp Xpsme';  // Expected result after shifting by 1
//     const shifted = caesarCipher(plaintext, 1); // Shift the plaintext by 1
//     expect(shifted).toBe(expected); // Check if the shifted text matches the expected result
//   });

//   // Test 2: Shift the plaintext by -1 position
//   test('shift by -1', () => {
//     const plaintext = 'Hello World'; 
//     const expected = 'Gdkkn Vnqkc';  // Expected result after shifting by -1
//     const shifted = caesarCipher(plaintext, -1); // Shift the plaintext by -1
//     expect(shifted).toBe(expected); // Check if the shifted text matches the expected result
//   });
//  // Test 3: Shift by 0, text should remain unchanged
//   test('shift by 0 (plaintext remains unchanged)', () => {
//     const plaintext = 'Hello World';
//     const shifted = caesarCipher(plaintext, 0);
//     expect(shifted).toBe(plaintext);
// });
// //Test 4: Shift by 27, greater than alphabet length, so should be same as 1
// test('shift by 27 (greater than alphabet length)', () => {
//     const plaintext = 'Hello World';
//     const expected = 'Ifmmp Xpsme';
//     const shifted = caesarCipher(plaintext, 27);
//     expect(shifted).toBe(expected);
//   });

// // Test 5: Shift by -27, less than negative alphabet length. so should be same as -1
// test('shift by -27 (less than negative alphabet length)', () => {
//     const plaintext = 'Hello World';
//     const expected = 'Gdkkn Vnqkc';
//     const shifted = caesarCipher(plaintext, -27);
//     console.log(shifted)
//     expect(shifted).toBe(expected);
//   });
  
// // Test 6: Shift by 25, less than negative alphabet length. so should be same as -1
// test('shift by 25 (25 A to Z)', () => {
//     const plaintext = 'Hello World';
//     const expected = 'Gdkkn Vnqkc';
//     const shifted = caesarCipher(plaintext, 25);
//     console.log(shifted)
//     expect(shifted).toBe(expected);
//   }); 
// });
