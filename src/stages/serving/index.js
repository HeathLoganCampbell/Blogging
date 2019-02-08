const views = require("./view");
// const api = require("./api");

exports.pageServing = function(app) {
	for (var i = 0; i < views.length; i++) {
		var view = views[i];
		app.get(view.getRoute(), view.onRender);
		view.onEnable(app);
	}
};
