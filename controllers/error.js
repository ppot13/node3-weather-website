const get404Article = (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Help article not found",
	});
};

const get404Page = (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Page not found",
	});
};

module.exports = {
	get404Article,
	get404Page,
};
