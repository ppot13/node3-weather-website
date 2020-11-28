const geocode = require("../src/utils/geocode");
const forecast = require("../src/utils/forecast");

exports.getWeather = (req, res) => {
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
};
