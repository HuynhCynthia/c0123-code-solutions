/* exported numVowels */
function numVowels(string) {
  var newString = string.toLowerCase();
  var vowelCount = 0;

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      vowelCount++;
    }
  }

  return vowelCount;
}
