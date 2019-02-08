//START IMPORTS
const express = require("express");

require("./utils/constants"); // loads into global and env

const { initSettings } = require("./stages/init");
const { pageServing } = require("./stages/serving");
const { start } = require("./stages/start");
//END IMPORTS

const app = express();

initSettings(app);

pageServing(app);

start(app);
