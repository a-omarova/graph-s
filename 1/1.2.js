/**
 * Created by amina on 12.09.2017.
 */

function createArray(item) {
	var arr = [];
	item.forEach(function(elem){
		arr.push(elem);
	})
	return arr;
}
function request() {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418%20or%20woeid%3D2459115%20or%20woeid%3D2122265&format=json', false);
	req.addEventListener('load', function() {
		var parseJSON = JSON.parse(req.responseText);
		createArray(parseJSON.query.results.channel);
		console.log(createArray(parseJSON.query.results.channel));
	});
	req.send();
}
request();
