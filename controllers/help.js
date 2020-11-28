exports.getHelp = (req, res) => {
	res.render("help", {
		title: "Help",
		helpText: "This is some helpful text!",
		name: "Edwin Cornejo",
	});
};
