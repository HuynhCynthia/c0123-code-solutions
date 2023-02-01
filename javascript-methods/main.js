// Math Object
var numOne = 10;
var numTwo = -20;
var numThree = 100;
var maximumValue = Math.max(numOne, numTwo, numThree);
var heroes = ['Raven', 'Starfire', 'Beastboy', 'Cyborg'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];

console.log('maximumValue: ', maximumValue);
console.log('randomIndex: ', randomIndex);
console.log('randomHero: ', randomHero);

// Array Method
var library = [
  {
    title: 'The Giving Tree',
    author: 'Shel Silverstein'
  },
  {
    title: 'Chicka Chicka Boom Boom',
    author: 'Bill Martin, Jr. and John Archambault'
  },
  {
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle'
  }
];
var lastBook = library.pop();
var firstBook = library.shift();
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

console.log('lastBook: ', lastBook);
console.log('firstBook: ', firstBook);

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library after push, unshift and splice methods:', library);

// String Mothods
var fullName = 'Cynthia Huynh';
var firstAndLastName = fullName.split(' ');
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('firstAndLastName:', firstAndLastName);
console.log('sayMyName', sayMyName);
