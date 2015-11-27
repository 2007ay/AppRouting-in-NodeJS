var loginService = function (name, req, resp, handlers) {

	//var dbSever = require("./sqlService");
	//var sqlServer = new dbSever.sqlService();

	this.login = function () {
		var query = "SELECT * FROM USER";
		//sqlServer.selectQuery(query);
		console.log("user made login request");
	}

	this.logout = function () {
		console.log("user made logut request");
	}
}

exports.loginService = loginService;