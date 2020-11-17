from palindrome import is_palindrome


class TestIsPalindrome:

    def test_for_trivial_cases(self):
        assert(is_palindrome("")) == True
        assert(is_palindrome("a")) == True
    
    def test_for_word_alone(self):
        assert(is_palindrome("no")) == False
        assert(is_palindrome("radar")) == True
    
    def test_for_simple_sentences(self):
        assert(is_palindrome("That is false")) == False
        assert(is_palindrome("Top spot")) == True

    def test_for_sentences_with_punctuation(self):
        assert(is_palindrome("Hello World!")) == False
        assert(is_palindrome("Was it a cat I saw?")) == True
