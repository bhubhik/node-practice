const path = require('path');
const process = require('process');

console.log(__dirname);
console.log(path.basename(__filename));

for (let key in global) {
  console.log(key);
}

// Keys of global onject of node.
// clearImmediate
// setImmediate
// clearInterval
// clearTimeout
// setInterval
// setTimeout
// queueMicrotask
// structuredClone
// atob
// btoa
// performance
// fetch
// crypto

console.log(process.argv); //Output the arguments of terminal.
