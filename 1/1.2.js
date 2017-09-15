/**
 * Created by amina on 12.09.2017.
 */

function createArray(arr) {
	var newArr = [];
	arr.forEach(function(city){
		newArr.push(city);
	});
	return arr;
}

function temp(arr) {
	var london = arr[0];
	var newYork = arr[1];
	var moskow = arr[2];

	console.log(findForecast(london));
	for (var i=0; i<arr.length; i++) {

	}
}

function findForecast(city) {
	return city.item.forecast;
}

function request() {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418%20or%20woeid%3D2459115%20or%20woeid%3D2122265&format=json', false);
	req.addEventListener('load', function() {
		var parseJSON = JSON.parse(req.responseText);
		var citiesArray = createArray(parseJSON.query.results.channel);
		temp(citiesArray);
		console.log(createArray(parseJSON.query.results.channel));
	});
	req.send();
}
request();

