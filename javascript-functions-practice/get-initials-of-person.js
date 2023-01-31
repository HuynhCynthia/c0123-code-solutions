/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initials = `${Array.from(person.firstName)[0]}${Array.from(person.lastName)[0]}`;
  return initials;
}
