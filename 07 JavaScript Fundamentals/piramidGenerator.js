function pyramid(char, count, invert) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    const rowChars = char.repeat(2 * i - 1);
    const rowSpaces = " ".repeat(count - i);
    
    rows.push(rowSpaces + rowChars);
  }

  if (invert) {
    rows.reverse();
  }

  return "\n" + rows.join("\n") + "\n";
}