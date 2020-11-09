const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
	res.render("index", {
		title: "Weather",
		name: "Edwin Cornejo",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Edwin Cornejo",
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help",
		helpText: "This is some helpful text!",
		name: "Edwin Cornejo",
	});
});

app.get("/weather", (req, res) => {
	const address = req.query.address;

	if (!address) {
		return res.send({
			Error: "You must provide search term",
		});
	}
	geocode(address, (error, { latitude, longtitude, location } = {}) => {
		if (error) {
			return res.send({
				error,
			});
		}
		forecast(latitude, longtitude, (error, forecastData) => {
			if (error) {
				return res.send({
					error,
				});
			}
			res.send({
				forecast: forecastData,
				location,
				address,
			});
		});
	});
});

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Help article not found",
	});
});

app.get("*", (req, res) => {
	res.render("404", {
		title: "404",
		name: "Edwin Cornejo",
		errorMessage: "Page not found",
	});
});

app.listen(port, () => {
	console.log("Server is up on port" + port);
});
