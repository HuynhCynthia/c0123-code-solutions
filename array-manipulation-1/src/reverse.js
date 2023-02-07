/* exported reverse */
function reverse(array) {
  var newArray = array;
  for (let i = 0; i < (array.length / 2); i++) {
    var insertLastStep = newArray[i];
    newArray[i] = array[(array.length - 1) - i];
    newArray[(array.length - 1) - i] = insertLastStep;
  }

  return newArray;
}
