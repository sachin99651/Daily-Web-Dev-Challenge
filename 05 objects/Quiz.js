const questions = [
  {
    category: "Objects",
    question: "Which notation uses a dot to access an object property?",
    choices: ["Bracket notation", "Dot notation", "Arrow notation"],
    answer: "Dot notation"
  },
  {
    category: "Objects",
    question: "What is the name of a function that belongs to an object?",
    choices: ["Variable", "Property", "Method"],
    answer: "Method"
  },
  {
    category: "Objects",
    question: "Which keyword is used to refer to the current object?",
    choices: ["this", "that", "self"],
    answer: "this"
  },
  {
    category: "Objects",
    question: "What is used to wrap an object's properties?",
    choices: ["Square brackets", "Curly braces", "Parentheses"],
    answer: "Curly braces"
  },
  {
    category: "Objects",
    question: "Which method returns an array of an object's keys?",
    choices: ["Object.keys()", "Object.values()", "Object.entries()"],
    answer: "Object.keys()"
  }
];
const getRandomQuestion = (questionsArray) => {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
};
const getRandomComputerChoice = (choicesArray) => {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
};
const getResults = (questionObject, computerChoice) => {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
};

const randomQuestion = getRandomQuestion(questions);
const randomChoice = getRandomComputerChoice(randomQuestion.choices);

console.log("Question:", randomQuestion.question);
console.log("Computer picked:", randomChoice);
console.log(getResults(randomQuestion, randomChoice));   