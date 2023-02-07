/* exported compact */
function compact(array) {
  var newArray = [];
  var indexIncrement = 0;

  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      newArray[indexIncrement] = array[i];
      indexIncrement++;
    }
  }
  return newArray;
}
