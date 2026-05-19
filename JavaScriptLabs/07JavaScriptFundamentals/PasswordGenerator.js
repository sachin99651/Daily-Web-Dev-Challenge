function generatePassword(length) {
  const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length); 
    generatedPassword += allowedChars.charAt(randomIndex);
  }
  return generatedPassword;
}
const password = generatePassword(12);
console.log("Generated password: " + password);