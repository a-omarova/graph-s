function request() {
	const req = new XMLHttpRequest();
	req.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418%20or%20woeid%3D2459115%20or%20woeid%3D2122265&format=json', false);
	req.addEventListener('load', function() {
		const response = JSON.parse(req.responseText);
		const results = response.query.results.channel.reduce((acc, channel) => {
			const cityForecast = channel.item.forecast.map(forecast => {
					return Object.assign({}, forecast, {
						city: channel.location.city
					});
			});
			return acc.concat(cityForecast);
		}, []);

		console.log(results);

		const sortedResult = results.sort(function (a, b) {
			if (a.high > b.high) {
				return -1;
			}
			if (a.high < b.high) {
				return 1;
			}
			return 0;
		});

		console.log(sortedResult);
		console.log(sortedResult[0].city, 'city',  sortedResult[0].high, 'temperature');

	});
	req.send();
}
request();