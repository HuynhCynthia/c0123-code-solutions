/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var rounds = Math.floor(array.length / size);

  for (let i = 0; i < rounds; i++) {
    var indexStart = (i * size);
    var subArray = [];
    for (let j = 0; j < size; j++) {
      subArray.push(array[indexStart + j]);
    }
    newArray.push(subArray);
  }

  if (array.length % size !== 0) {
    var endSubArray = [];
    for (let k = 0; k < array.length - (size * rounds); k++) {
      endSubArray.push(array[(size * rounds) + k]);
    }
    newArray.push(endSubArray);
  }

  return newArray;
}
