/* exported filterOutStrings */
function filterOutStrings(value) {
  let i = 0;
  var newArray = [];

  while (i < value.length) {
    if (typeof value[i] !== 'string') {
      newArray.push(value[i]);
    }
    i++;
  }

  return newArray;
}
