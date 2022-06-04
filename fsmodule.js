const fs = require('fs');

console.log("Start");
const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt', 'utf-8');

fs.writeFileSync('./content/results-sync.txt', `Here is the result : ${first}, ${second}`);
console.log('done with this task');
console.log("Starting th next one");