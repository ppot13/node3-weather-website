const getNotAnArticle = (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Help article not found",
	});
};

const getNotAPage = (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Page not found",
	});
};

module.exports = {
	getNotAnArticle,
	getNotAPage,
};
