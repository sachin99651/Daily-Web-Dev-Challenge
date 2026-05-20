function dropElements(arr, func) {
  const targetIndex = arr.findIndex(func);

  if (targetIndex === -1) {
    return [];
  }

  return arr.slice(targetIndex);
}