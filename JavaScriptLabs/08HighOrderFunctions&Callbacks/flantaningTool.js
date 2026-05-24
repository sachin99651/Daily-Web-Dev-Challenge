function steamrollArray(arr) {
  const flattened = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(item => flatten(item));
    } else {
      flattened.push(element);
    }
  }

  arr.forEach(item => flatten(item));

 return flattened;
}