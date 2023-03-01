/* exported pick */
function pick(source, keys) {
  var object = {};
  for (let i = 0; i < keys.length; i++) {
    for (const property in source) {
      if (property === keys[i] && source[property] !== undefined) {
        object[property] = source[property];
      }
    }
  }
  return object;
}
