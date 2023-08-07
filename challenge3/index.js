import * as fs from "fs";

const puzzle = JSON.parse(fs.readFileSync("./puzzle.json"));
const linkedList = puzzle.linkedList;
const extractedValues = [];
let node = linkedList.find((node) => node.id === puzzle.top);

while (node) {
  extractedValues.push(node.value);
  node = linkedList.find((anotherNode) => anotherNode.id === node.next);
}

console.log(extractedValues);
