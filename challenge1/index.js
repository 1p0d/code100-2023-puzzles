import * as fs from "fs";

const puzzle = JSON.parse(fs.readFileSync("./puzzle.json"));
const puzzleArray = puzzle.split("");
const stringDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const collectedPuzzleNumberStrings = [];
let prevDigitIndex = null;

for (let i = 0; i < puzzleArray.length; i++) {
  if (!stringDigits.includes(puzzleArray[i])) continue;
  if (prevDigitIndex === i - 1)
    collectedPuzzleNumberStrings[collectedPuzzleNumberStrings.length - 1] +=
      puzzleArray[i];
  else collectedPuzzleNumberStrings.push(puzzleArray[i]);
  prevDigitIndex = i;
}

console.log(
  collectedPuzzleNumberStrings.map(Number).reduce((a, b) => a + b, 0)
);
