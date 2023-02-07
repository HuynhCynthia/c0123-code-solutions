/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (word !== 'javascript') {
    var firstChar = word[0];
    var upperCaseWord = newWord.replace(word[0], firstChar.toUpperCase());
  } else {
    upperCaseWord = 'JavaScript';
  }

  return upperCaseWord;
}
