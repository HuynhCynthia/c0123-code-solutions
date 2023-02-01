/* exported getSecondCharacter */
function getSecondCharacter(string) {
  var convertStringToArray = Array.from(string);
  var secondCharacter = convertStringToArray[1];
  return secondCharacter;
}
