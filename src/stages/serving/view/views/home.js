const View = require("../view-base");

module.exports = class Home extends View {
	constructor() {
		super();
	}

	getRoute() {
		return "/";
	}

	onRender(req, res) {
		res.render("index.html", {
			partials: {
				"login-form": "partials/login-form"
			}
		});
	}
};
