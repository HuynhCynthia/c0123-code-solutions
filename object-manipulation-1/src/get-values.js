/* exported getValues */
function getValues(object) {
  var newArray = [];
  var index = 0;

  for (const property in object) {
    newArray[index] = object[property];
    index++;
  }
  return newArray;
}
