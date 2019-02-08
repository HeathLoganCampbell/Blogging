const dotenv = require("dotenv");

global.__basedir = __dirname + "/../..";
global.__isproduction = !(process.env.NODE_ENV === "development");
global.__environment =
	process.env.NODE_ENV === "development" ? "development" : "production";

dotenv.config({
	path: __basedir + "/configs/" + __environment + "/.env"
});
