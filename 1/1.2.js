/**
 * Created by amina on 12.09.2017.
 */
var LONDON = 0;
var NEW_YORK = 1;
var MOSCOW = 2;

var arr = [];

function oneDayWeather(cityName, channel, dayIndex) {
	var cityObj = channel[cityName];
	var forecast = cityObj.item.forecast;
	var dayWeather = forecast[dayIndex];

	if (cityName === 0) {
		dayWeather.city = 'London';
	} else if (cityName === 1) {
		dayWeather.city = 'New York';
	} else if (cityName === 2){
		dayWeather.city = 'Moscow';
	} else {
		dayWeather.city = null;
	}
	return dayWeather;
}

function pushCitiesWeatherInArray(oneDayWeather) {
	arr.push(oneDayWeather);
}

function showData(array, cityObj) {
	var list = document.querySelector('.list');
	var hottestCity = document.querySelector('.city');

	for (var i=0; i<array.length; i++) {
		list.innerHTML += '<li>' + 'city ' + array[i].city + ', ' + 'code ' + array[i].code + ', ' + 'date ' + array[i].date + ', ' + 'day ' + array[i].day + ', ' + 'high ' + array[i].high + ', ' + 'low ' + array[i].low + ', ' + 'text ' + array[i].text + '</li>';
	}

	hottestCity.innerHTML = 'city ' + cityObj.city + ', ' + 'high ' + cityObj.high;
}

function findHottestCity(array) {
	var LondonArr = [];
	var NYArr = [];
	var Moscow = [];

	var i = 0;

	while (i < 10) {
		LondonArr.push(array[i]);
		i++;
	}

	while (i < 20) {
		NYArr.push(array[i]);
		i++;
	}

	while (i < 30) {
		Moscow.push(array[i]);
		i++;
	}

	var sortedLondonArr = LondonArr.sort(sortArray).reverse();
	var sortedNYArr = NYArr.sort(sortArray).reverse();
	var sortedMoscow = Moscow.sort(sortArray).reverse();

	var hottestCityArr = [];

	hottestCityArr.push(sortedLondonArr[0]);
	hottestCityArr.push(sortedNYArr[0]);
	hottestCityArr.push(sortedMoscow[0]);

	hottestCityArr.sort(sortArray).reverse();


	return hottestCityArr[0];
}

function sortArray (a, b) {
	if (a.high > b.high) {
		return 1;
	}
	if (a.high < b.high) {
		return -1;
	}
	return 0;
}

function request() {
	var req = new XMLHttpRequest();
	req.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D44418%20or%20woeid%3D2459115%20or%20woeid%3D2122265&format=json', false);
	req.addEventListener('load', function() {
		var parseJSON = JSON.parse(req.responseText);
		var channel = parseJSON.query.results.channel;
		var i = 0;

		while (i < 10) {
			pushCitiesWeatherInArray(oneDayWeather(LONDON, channel, i));

			i++;
		}

		i = 0;
		while (i < 10) {
			pushCitiesWeatherInArray(oneDayWeather(NEW_YORK, channel, i));

			i++;
		}

		i = 0;
		while (i < 10) {
			pushCitiesWeatherInArray(oneDayWeather(MOSCOW, channel, i));

			i++;
		}



		console.log(findHottestCity(arr));
		console.log(arr);
		showData(arr, findHottestCity(arr))
	});
	req.send();
}
request();