//1. require each service
//2. create an object and map each function to one key .Basically this key is again and url
module.exports.appRouter = function () {

	var lnService = require("./loginService");
	var urService = require("./userService");
	var trService = require("./tripService");

	var loginService = new lnService.loginService();
	var tripService = new trService.tripService();
	var userService = new urService.userService();

	var map = {};

	map["/loginService/login"] = loginService.login;
	map["/loginService/logout"] = loginService.logout;
	map["/tripService/getAllTrip"] = tripService.getAllTrip;
	map["/tripService/getTripById"] = tripService.getTripById;
	map["/userService/createUser"] = userService.createUser;

	return map;
}