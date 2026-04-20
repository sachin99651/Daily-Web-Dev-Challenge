let count = 0; // This is your global variable

function cardCounter(card) {
  // 1. Update the count based on the card value
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    // We don't need cases for 7, 8, 9 because the count doesn't change
  }

  // 2. Decide whether to Bet or Hold
  let action = count > 0 ? "Bet" : "Hold";

  // 3. Return the formatted string
  return count + " " + action;
}

// Examples of how it works:
console.log(cardCounter(2)); // Output: "1 Bet"
console.log(cardCounter("K")); // Output: "0 Hold" (1 - 1 = 0)