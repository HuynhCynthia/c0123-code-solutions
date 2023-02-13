/* exported omit */
function omit(source, keys) {
  var newObject = {};

  for (const property in source) {
    var inKey = false;
    for (let i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        inKey = true;
        break;
      }
    }
    if (inKey === false) {
      newObject[property] = source[property];
    }
  }
  return newObject;
}
