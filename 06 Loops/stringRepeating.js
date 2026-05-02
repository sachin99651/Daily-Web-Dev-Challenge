function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let accumulatedString = "";
  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }

  return accumulatedString;
}
console.log(repeatStringNumTimes("abc", 3)); 
console.log(repeatStringNumTimes("hello", 0)); 