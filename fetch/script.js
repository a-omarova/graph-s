const getSameDomain = document.querySelector('.get-same-domain');
const getAnotherDomain = document.querySelector('.get-another-domain');
const postSameDomain = document.querySelector('.post-same-domain');
const postAnotherDomain = document.querySelector('.post-another-domain');

getSameDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:5000/data.json')
		.then(res => res.json())
		.then(res => {
			console.log(res);
		});
});

getAnotherDomain.addEventListener('click', () => {
	fetch('https://swapi.co/api/people/1', {mode: 'no-cors'})
		.then(res => res.json())
		.then(res => {
			console.log(res);
		})
});

postSameDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:5000/data.json', {
		method: 'post',
		headers: {
			'Content-type': 'application/json',
			'credentials': 'include',
			'Set-Cookie': 'qweqweqwe=qweqwe'
		},
		body: 'foo=bar&lorem=ipsum dhgbf sfgsd gdfg dfg fg d'
		})
		.then(res => res.json())
		.then(res => {
			console.log(res);
		})
});

postAnotherDomain.addEventListener('click', () => {
	fetch('https://swapi.co/api/people/1', {
		method: 'post',
		headers: { "Content-type": "application/json"},
	})
		.then(res => res.json())
		.then(res => {
			console.log(res);
		})
});
