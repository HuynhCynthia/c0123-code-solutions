/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCaseString = string.toLowerCase();
  var stringArray = lowerCaseString.split(' ');
  var newString = [];
  // console.log('stringArray:', stringArray);
  for (let i = 0; i < stringArray.length; i++) {
    var word = stringArray[i];
    var upperFirstChar = word[0].toUpperCase();
    var upperCasedWord = word.replace(word[0], upperFirstChar);
    newString.push(upperCasedWord);
  }

  return newString.join(' ');
}
