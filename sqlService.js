var mysql = require('mysql');

var sqlService = function () {
	
	var self = this;
	
	self.connection = mysql.createConnection({
		host: 'localhost',
		user: 'admin',
		password: 'admin',
		database: 'test'
	});

	this.selectQuery = function (query) {
		try {

			self.connection.connect();
			self.connection.query(query, function (err, rows, fields) {
				if (!err)
					console.log('The solution is: ', rows);
				else
					console.log('Error while performing Query.');
			});

			self.connection.end();

		} catch (e) {
			console.log(e);
		}
	}
}

module.exports.sqlService = sqlService;