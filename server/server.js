const http = require('http');
const app =require("./index");
const config = require("./configs/default");
const port = config.port;
const server = http.createServer(app);
server.listen(port);
console.log("server listening on port " + port);