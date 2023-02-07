/* exported initial */
function initial(array) {
  var newArray = [];
  var count = 0;

  while (count < array.length - 1) {
    newArray[count] = array[count];
    count++;
  }

  return newArray;
}
