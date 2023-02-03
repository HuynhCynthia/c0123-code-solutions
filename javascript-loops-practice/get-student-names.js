/* exported getStudentNames */
function getStudentNames(students) {
  let i = 0;
  var namesArray = [];

  while (i < students.length) {
    namesArray.push(students[i].name);
    i++;
  }

  return namesArray;
}
