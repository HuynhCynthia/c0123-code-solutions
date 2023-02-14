/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = [];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString[secondIndex] = string[firstIndex];
    } else if (i === secondIndex) {
      newString[firstIndex] = string[secondIndex];
    } else {
      newString[i] = string[i];
    }
  }
  return newString.join('');
}
