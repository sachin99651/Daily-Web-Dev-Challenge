function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
     .join(' ');
}

console.log(titleCase("I like to code"));      // Output: "I Like To Code"
console.log(titleCase("javaScript is fun"));   // Output: "Javascript Is Fun"

