var books =
[
  {
    isbn: 1,
    title: "What's the Point",
    author: 'Who Cares'
  },
  {
    isbn: 333,
    title: 'All is the Point',
    author: 'Cares Alot'
  },
  {
    isbn: 55555,
    title: "There's a Point?",
    author: 'Cares Sometimes'
  }
];

var jsonBook = JSON.stringify(books);
var student = '{ "number-id": 12345, "string": "Fame Grow"}';
var studentParse = JSON.parse(student);

console.log('array:', books);
console.log('books type:', typeof books);
console.log('json stringify', jsonBook);
console.log('stringify array typeof:', typeof jsonBook);
console.log('string student:', student);
console.log('string typeof:', typeof student);
console.log('studentParse:', studentParse);
console.log('parse typeof:', typeof studentParse);
