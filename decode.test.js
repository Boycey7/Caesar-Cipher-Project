const caesarDecipher = require('./decode');

describe('Caesar Cipher Decryption', () => {
  // Test 1: Shift the ciphertext by 1 position to decrypt
  test('shift by 1 (decrypt)', () => {
    const ciphertext = 'Ifmmp Xpsme';
    const expected = 'Hello World';
    const decrypted = caesarDecipher(ciphertext, 1);
    expect(decrypted).toBe(expected);
  });

  // Test 2: Shift the ciphertext by -1 position to decrypt
  test('shift by -1 (decrypt)', () => {
    const ciphertext = 'Gdkkn Vnqkc';
    const expected = 'Hello World';
    const decrypted = caesarDecipher(ciphertext, -1);
    expect(decrypted).toBe(expected);
  });

  // Test 3: Shift by 0, text should remain unchanged
  test('shift by 0 (text remains unchanged)', () => {
    const ciphertext = 'Hello World';
    const decrypted = caesarDecipher(ciphertext, 0);
    expect(decrypted).toBe(ciphertext);
  });

  // Test 4: Shift by 27, greater than alphabet length, so should be same as -1
  test('shift by 27 (greater than alphabet length)', () => {
    const ciphertext = 'Ifmmp Xpsme';
    const expected = 'Hello World';
    const decrypted = caesarDecipher(ciphertext, 27);
    expect(decrypted).toBe(expected);
  });

  // Test 5: Shift by -27, less than negative alphabet length, so should be same as 1
  test('shift by -27 (less than negative alphabet length)', () => {
    const ciphertext = 'Gdkkn Vnqkc';
    const expected = 'Hello World';
    const decrypted = caesarDecipher(ciphertext, -27);
    expect(decrypted).toBe(expected);
  });
});