/*
Wording:
-------
Write a function that returns if a string is a palindrome (string equal to its reversed string).
All spaces, digits and punctuation must be removed from the string before testing and all letters considered in the case (lowercase or uppercase).
*/

function onlyKeepLetters(string) {
    let filteredString = "";
    let letterRegex = /^[a-zA-Z]$/;

    for (let i = 0; i < string.length; i++) {
        if (string[i].match(letterRegex)) {
            filteredString += string[i];
        }
    }
    return filteredString;
}

function isPalindrome(string) {
    let reversedString = "";

    string = string.toLowerCase();
    string = onlyKeepLetters(string);

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return string === reversedString;
}

// Tests suite:
console.log("Test isPalindrome for trivial cases:");
console.log(
    "Result:", isPalindrome(""),
    "Expected: true"
);
console.log(
    "Result:", isPalindrome("a"),
    "Expected: true"
);

console.log("Test isPalindrome for word alone:");
console.log(
    "Result:", isPalindrome("no"),
    "Expected: false"
);
console.log(
    "Result:", isPalindrome("radar"),
    "Expected: true"
);

console.log("Test isPalindrome for simple sentences:");
console.log(
    "Result:", isPalindrome("That is false"),
    "Expected: false"
);
console.log(
    "Result:", isPalindrome("Top spot"),
    "Expected: true"
);

console.log("Test isPalindrome for sentences with punctuation:");
console.log(
    "Result:", isPalindrome("Hello World!"),
    "Expected: false"
);
console.log(
    "Result:", isPalindrome("Was it a cat I saw?"),
    "Expected: true"
);