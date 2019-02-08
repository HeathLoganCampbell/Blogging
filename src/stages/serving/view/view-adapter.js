module.exports = class ViewAdapter extends View {
	constructor(route, fileName) {
		super();
		this.route = route;
		this.fileName = fileName;
	}

	getRoute() {
		return "/" + route;
	}

	onRender(req, res) {
		res.render(fileName, {});
	}
};
