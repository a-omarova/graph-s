function findPlace(text) {
	const URL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22${text}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

	return fetch(URL, {mode: 'cors'})
		.then(res => res.json())
		.then(data => {
			const {results} = data.query;

			if (!results) {
				return [];
			}

			const {place} = results;

			return Array.isArray(place) ? place : [place];
		});
}

function getWeather(woeid) {
	const URL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D${woeid}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

	return fetch(URL, {mode: 'cors'})
		.then(res => res.json())
		.then(data => {
			const {results} = data.query;

			return results ? results.channel : null;
		});
}

const concat = Array.prototype.concat;

findPlace('London')
	.then(list => list.map(elem => ({woeid: elem.woeid})))
	.then(list => list.reduce((acc, elem) => {
			console.log('hi');
			return acc.then(
				res => getWeather(elem.woeid)
					.then(item => {
						console.log('yo');
						res.push(item);
						return res;
					})
			)
		}, Promise.resolve([])
	))
	.then(list => list.map(elem => ({title: elem.title, location: elem.location, sunrise: elem.astronomy.sunrise})))
	.then(console.log.bind(console))
	.catch(err => console.log('It\'s an error!', err.message));


// .then(list => Promise.all(list))
// .then(list => list.map(elem => getWeather(elem.woeid)))