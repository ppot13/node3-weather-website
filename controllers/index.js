exports.getIndex = (req, res) => {
	res.render("index", {
		title: "Weather",
		name: "Edwin Cornejo",
	});
};
