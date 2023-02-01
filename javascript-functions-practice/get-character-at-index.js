/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index) {
  var convertStringToArray = Array.from(string);
  var indexCharacter = convertStringToArray[index];
  return indexCharacter;
}
