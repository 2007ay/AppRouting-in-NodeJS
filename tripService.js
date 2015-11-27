var tripService = function (name, req, resp, handlers) {

	this.getAllTrip = function () {
		console.log("please return all the trips for this user");
	}

	this.getTripById = function () {
		console.log("please return the trip by id");
	}
}

exports.tripService = tripService;