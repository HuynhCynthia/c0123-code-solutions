/* exported includesSeven */
function includesSeven(array) {
  let i = 0;
  var boolean = false;

  while (i < array.length) {
    if (array[i] === 7) {
      boolean = true;
    }
    i++;
  }

  return boolean;
}
