/* exported defaults */
function defaults(target, source) {
  for (const propertySource in source) {
    var inKey = false;
    for (const propertyTarget in target) {
      if (propertySource === propertyTarget) {
        inKey = true;
        break;
      }
    }
    if (inKey === false) {
      target[propertySource] = source[propertySource];
    }
  }
  return target;
}
