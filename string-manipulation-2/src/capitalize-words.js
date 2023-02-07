/* exported capitalizeWords */
function capitalizeWords(word) {
  word = word.toLowerCase();
  if (word !== 'javascript') {
    var firstChar = word[0];
    word = word.replace(word[0], firstChar.toUpperCase());
  } else {
    word = 'JavaScript';
  }

  return word;
}
