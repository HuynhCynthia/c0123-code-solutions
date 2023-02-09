/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCaseString = string.toLowerCase();
  var stringArray = lowerCaseString.split(' ');
  var newString;
  // console.log('stringArray:', stringArray);
  for (let i = 0; i < stringArray.length; i++) {
    var word = stringArray[i];
    var upperFirstChar = word[0].toUpperCase();
    // console.log('upperFirstChar:', upperFirstChar);
    var upperCasedWord = word.replace(word[0], upperFirstChar);
    // console.log('new uppercased word:', upperCasedWord);
    // console.log('hello:', newString);
  }
  return upperCasedWord + newString;
}
