"use strict";

function caesarCipher(str, shift, decrypt = false) {
  shift = decrypt ? (26 - shift) % 26 : shift;
  shift = shift >= 0 ? shift : 26 + shift;

  return [...str]
    .map((char, index) => {
      const ascii = str.charCodeAt(index);

      if (ascii >= 65 && ascii <= 90) {
        return String.fromCharCode(((ascii - 65 + shift) % 26) + 65);
      }
      if (ascii >= 97 && ascii <= 122) {
        return String.fromCharCode(((ascii - 97 + shift) % 26) + 97);
      }
      return char;
    })
    .join("");
}

module.exports = caesarCipher;
