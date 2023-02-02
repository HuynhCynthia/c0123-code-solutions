/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newArray.push('odd');

    } else if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('not number');
    }
  }

  return newArray;
}
