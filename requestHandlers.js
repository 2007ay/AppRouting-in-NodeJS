var router = require("./appRouter");
var routeMap = new router.appRouter();

//This function will rout to the corrensponding
//javascript module which is maped in routerMap object
var handleRequest = function (request, response, endPointName) {

	if (routeMap[endPointName] !== undefined) {
		routeMap[endPointName](request, response);
		return true;
	}
	return false; // not found
}

exports.handleRequest = handleRequest;