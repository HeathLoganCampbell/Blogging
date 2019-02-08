const views = require("./view");

exports.pageServing = function(app) {
	for (var i = 0; i < views.length; i++) {
		var view = views[i];
		app.get(view.getRoute(), view.onRender);
		view.onEnable(app);
	}
};
