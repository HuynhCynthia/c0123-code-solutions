/* exported toObject */
function toObject(keyValuePair) {
  var emptyObject = {};
  emptyObject[keyValuePair[0]] = keyValuePair[1];
  return emptyObject;
}
