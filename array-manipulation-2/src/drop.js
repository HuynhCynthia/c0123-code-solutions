/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (; count < array.length; count++) {
    newArray.push(array[count]);
  }
  return newArray;
}
