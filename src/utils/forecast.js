const request = require("request");

const forecast = (latitude, longtitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=e6a741d374b55094c850f92437661187&query=${latitude},${longtitude}`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to forecast services!", undefined);
		} else if (body.error) {
			callback("Unable to find location.Try another search", undefined);
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] +
					". Its currently " +
					body.current.temperature +
					" degrees. It feels like " +
					body.current.feelslike +
					" degrees out "
			);
		}
	});
};

module.exports = forecast;
