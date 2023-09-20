const path = require('path');
const v8 = require('v8');

console.log(path.basename(__filename));

const dirUpload = path.join(__dirname, 'creates', 'directory', 'path');

console.log(dirUpload);

console.log(v8.getHeapStatistics()); //Logs the memory used by the app
