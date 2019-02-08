const consolidate = require("consolidate");
const bodyParser = require("body-parser");
const express = require("express");

exports.initSettings = function(app) {
	app.use(bodyParser.json());
	app.use(
		bodyParser.urlencoded({
			extended: true
		})
	);

	app.use("/assets", express.static("public"));

	app.set("views", __basedir + "/pages");
	app.set("view engine", "html");
	app.engine(".html", consolidate.handlebars);
};
