var appSever = require("./server"); //to start node server
var requestHandlers = require("./requestHandlers"); // this guy delegate responsibilty to the related javascript module

var server = new appSever.trippyServer();
server.start(requestHandlers);