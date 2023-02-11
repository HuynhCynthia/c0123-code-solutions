/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (let i = 0; i < count && i < array.length; i++) {
    if (array[array.length - 1 - i] !== 'undefined') {
      newArray.unshift(array[array.length - 1 - i]);
    }
  }
  return newArray;

}
