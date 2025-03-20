const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askYesNoQuestion(question) {
  return new Promise((resolve) => {
    rl.question(`${question} (y/n): `, (answer) => {
      const normalizedAnswer = answer.trim().toLowerCase();
      if (normalizedAnswer === "y" || normalizedAnswer === "yes") {
        resolve(true);
      } else if (normalizedAnswer === "n" || normalizedAnswer === "no") {
        resolve(false);
      } else {
        console.log('Please answer with "y" or "n".');
        resolve(askYesNoQuestion(question)); // Ask again
      }
      rl.close();
    });
  });
}

module.exports = askYesNoQuestion;
