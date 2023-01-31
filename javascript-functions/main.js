function addTwoNumber(x, y) {
  var sum = x + y;
  return sum;
}

function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}

function greet(name) {
  var greeting = `Hey, ${name}`;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var addTwoNumberResult = addTwoNumber(2, 3);
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
var greetResult = greet('Beavis');
var getAreaResult = getArea(17, 42);
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('addTwoNumbersResult:', addTwoNumberResult);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
console.log('greetResult:', greetResult);
console.log('getAreaResult:', getAreaResult);
console.log('getFirstNameResult: ', getFirstNameResult);
console.log('getLastElementResult:', getLastElementResult);
