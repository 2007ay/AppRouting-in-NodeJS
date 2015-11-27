var userService = function (name, req, resp, handlers) {

	this.createUser = function () {
		console.log("create user...");
	}
}

exports.userService = userService;