function uniteUnique(...arrays) {
  const flatArray = arrays.flat();
  const uniqueSet = new Set(flatArray);
  return Array.from(uniqueSet);
}