// Binua, Ralph Gabriel B.
//3BSIT-5

const fs = require('fs');

// Read the file
const content = fs.readFileSync('message.txt', 'utf-8');
console.log("File Content:", content);
