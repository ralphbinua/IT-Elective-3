// Binua, Ralph Gabriel B.
//3BSIT-5

const http = require('http');
const fs = require('fs');
const os = require('os');

// Create a server
const server = http.createServer((req, res) => {
    const Operating_System = os.type();
    const Architecture = os.arch();
    const Free_Memory = os.freemem();
    const File_Content = fs.readFileSync('message.txt', 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`File Content: ${File_Content}\nOperating System: ${Operating_System}\nArchitecture: ${Architecture}\nFree Memory: ${Free_Memory} bytes\n`);
});


// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
