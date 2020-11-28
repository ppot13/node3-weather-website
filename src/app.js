const express = require("express");
const path = require("path");
const hbs = require("hbs");

const indexController = require("../controllers/index");
const aboutController = require("../controllers/about");
const helpController = require("../controllers/help");
const weatherController = require("../controllers/weather");
const errorController = require("../controllers/error");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", indexController.getIndex);

app.get("/about", aboutController.getAbout);

app.get("/help", helpController.getHelp);

app.get("/weather", weatherController.getWeather);

app.get("/help/*", errorController.get404Article);

app.get("*", errorController.get404Page);

app.listen(port, () => {
	console.log("Server is up on port" + port);
});
