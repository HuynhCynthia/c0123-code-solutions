/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';

  for (let i = 0; i < word.length; i++) {
    newWord += word[(word.length - 1) - i];
  }

  return newWord;
}
