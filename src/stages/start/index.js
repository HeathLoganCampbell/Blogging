const port = 8080 || process.env.PORT;

exports.start = function(app) {
	app.listen(port, () =>
		console.log(`Example app listening on port ${port}!`)
	);
};
