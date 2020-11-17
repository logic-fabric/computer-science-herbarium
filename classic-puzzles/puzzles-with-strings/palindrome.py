"""
Wording:
-------
Write a function that returns if a string is a palindrome (string equal to its reversed string).
All spaces, digits and punctuation must be removed from the string before testing and all letters considered in the case (lowercase or uppercase).
"""


def only_keep_letters(string: str) -> str:
    return "".join([
        c for c in string if c.isalpha()
    ])

def is_palindrome(string: str) -> bool:
    string = only_keep_letters(string.lower())

    return string == string[::-1]


if __name__ == '__main__':
    pass
