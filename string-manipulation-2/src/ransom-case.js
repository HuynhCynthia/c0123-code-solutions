/* exported ransomCase */
function ransomCase(string) {
  var lowerCaseString = string.toLowerCase();
  var newString = [];

  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += lowerCaseString[i].toUpperCase();
    } else {
      newString += lowerCaseString[i];
    }
  }
  return newString;
}
