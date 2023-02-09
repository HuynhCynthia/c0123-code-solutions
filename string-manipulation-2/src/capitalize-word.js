/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  var firstChar = newWord[0];
  var upperCaseWord = newWord.replace(newWord[0], firstChar.toUpperCase());

  if (upperCaseWord !== 'Javascript') {
    return upperCaseWord;
  } else {
    return 'JavaScript';
  }
}
