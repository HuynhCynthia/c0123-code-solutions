/* exported getFirstCharacter */
function getFirstCharacter(string) {
  var convertStringToArray = Array.from(string);
  var firstCharacter = convertStringToArray[0];
  return firstCharacter;
}
