import * as fs from "fs";

const words = JSON.parse(fs.readFileSync("./puzzle.json"));
const anagrams = [];

const charArrayEquals = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (!word) continue;
  let hasAnagram = false;
  const sortedWordChars = word.split("").sort((a, b) => a.localeCompare(b));
  for (let j = i + 1; j < words.length; j++) {
    const otherWord = words[j];
    if (!otherWord) continue;
    const sortedOtherWordChars = otherWord
      .split("")
      .sort((a, b) => a.localeCompare(b));
    if (!charArrayEquals(sortedWordChars, sortedOtherWordChars)) continue;
    anagrams.push(otherWord);
    words[j] = null;
    hasAnagram = true;
  }
  if (hasAnagram) anagrams.push(word);
}

console.log(anagrams.sort((a, b) => a.localeCompare(b)));
