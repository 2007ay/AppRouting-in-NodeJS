var http = require("http");
var url = require('url');

module.exports.trippyServer = function (name, req) {
	this.server;
	this.requestHandlers;

	this.start = function (requestHandlers) {

		var self = this;
		self.requestHandlers = requestHandlers;

		self.server = http.createServer(function (request, response) {

			var parts = url.parse(request.url, true);
			var endPoint = parts.pathname;
			self.requestHandlers.handleRequest(request, response, endPoint);
			try {
				response.writeHead(200, {
					"Content-Type": "text/plain"
				});
				response.write("Hello World");
				response.end();
				console.log("server is started.....");
			} catch (err) {
				console.log("Some error is occured in starting server : " + err);
			}

		}).listen(8888);

		console.log("Sever is started and Waiting for client Request...at localhost:8888");
	}

	this.stopSever = function () {
		this.server.close(function () {
			console.log('Server closed!');
		});
	}
}