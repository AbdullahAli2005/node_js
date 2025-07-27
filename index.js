console.log('Server is running...');

// const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide } = require('./math');

console.log('Addition:', add(5, 3)); // 8
console.log('Subtraction:', subtract(5, 3)); // 2

// console.log('OS Type:', os.type());
// console.log('OS Version:', os.version());
// console.log('OS Home:', os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.parse(__filename));