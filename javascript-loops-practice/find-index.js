/* exported findIndex */
function findIndex(array, value) {

  let i = 0;
  var returnValue = -1;

  while (i < array.length) {
    if (array[i] === value) {
      return i;
    }
    i++;
  }

  return returnValue;
}
