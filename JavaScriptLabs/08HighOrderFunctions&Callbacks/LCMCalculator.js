function getGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  
  let currentLCM = min;
  for (let i = min + 1; i <= max; i++) {
    currentLCM = getLCM(currentLCM, i);
  }
  
  return currentLCM;
}