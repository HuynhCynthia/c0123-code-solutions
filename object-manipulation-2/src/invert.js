/* exported invert */
function invert(source) {
  var newObject = {};
  for (const property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}
