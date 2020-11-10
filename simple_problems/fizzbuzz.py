"""
Wording:
-------
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of 3 it should output “Fizz” instead of the number and for the multiples of 5 output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
"""

from typing import List


def fizzbuzz(n: int) -> List[str]:
    output = []

    if n < 1:
        return output

    else:
        for i in range(1, n + 1):
            if i % 3 == 0 or i % 5 == 0:
                output.append(
                    (i % 3 == 0) * "Fizz" + (i % 5 == 0) * "Buzz"
                )
            else:
                output.append(str(i))
        
        return output


if __name__ == '__main__':
    pass
