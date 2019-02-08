module.exports = class View {
	constructor() {}

	getRoute() {
		return "/404";
	}

	onRender(req, res) {
		res.render("404", {});
	}

	onEnable() {
		console.log(`View :} Page ${this.getRoute()} Enabled!`);
	}
};
