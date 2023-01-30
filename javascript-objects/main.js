// Student Object
var student = {
  firstName: 'Cynthia',
  lastName: 'Huynh',
  age: 29
};
var fullName = `${student.firstName} ${student.lastName}`;

student.livesInIrvine = true;
student.previousOccupation = 'group fitness instructor';

console.log('fullName:', fullName);
console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student object:', student);

// Vehicle Object
var vehicle = {
  make: 'Honda',
  model: 'Fit',
  year: '2013'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('vehicle[\'color\']:', vehicle['color']);
console.log('vehicle[\'isConvertible\']:', vehicle['isConvertible']);
console.log('vehicle object:', vehicle);

// Pet Object
var pet = {
  name: 'Anaban',
  type: 'mutt and not the pretty kind'
};

delete pet.name;
delete pet.type;
console.log('pet object:', pet);
