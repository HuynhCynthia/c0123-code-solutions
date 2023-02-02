/* exported countdown */
function countdown(number) {
  var array = [];

  for (let i = 0; i < number + 1; i++) {
    array.unshift(i);
  }

  return array;
}
