/* exported capitalize */
function capitalize(word) {
  word = word.toLowerCase();
  var firstChar = word[0].toUpperCase();
  word = word.replace(word[0], firstChar);
  return word;
}
