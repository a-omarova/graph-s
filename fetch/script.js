const getSameDomain = document.querySelector('.get-same-domain');
const getAnotherDomain = document.querySelector('.get-another-domain');
const postSameDomain = document.querySelector('.post-same-domain');
const postAnotherDomain = document.querySelector('.post-another-domain');

getSameDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:3000/data.json')
		.then(res => res.json())
		.then(res => {
			console.log(res);
		});
});

getAnotherDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:3002/hello')
		.then(res => res.json())
		.then(res => {
			console.log(res);
		})
});

postSameDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:3000/index-post.html', {
		method: 'post',
		headers: {
			'Content-type': 'application/json',
			'Some-info': 'qweqweqwe=qweqwe'
		},
		mode: 'no-cors'
	})
		.then(res => res.text())
		.then(res => {
			console.log(res);
		})


	// fetch('http://127.0.0.1:3000/data.json', {
	// 	method: 'post',
	// 	headers: {
	// 		'Content-type': 'application/json',
	// 		'Some-info': 'qweqweqwe=qweqwe'
	// 	},
	// 	body: 'foo=bar&lorem=ipsum dhgbf sfgsd gdfg dfg fg d'
	// 	})
	// 	.then(res => res.json())
	// 	.then(res => {
	// 		console.log(res);
	// 	})
});

postAnotherDomain.addEventListener('click', () => {
	fetch('http://127.0.0.1:3002/post', {
		method: 'post',
		headers: {
			"Content-type": "application/json",
			"credentials": 'include',
			"cookie": 'jbhbhbbkjbk'
		},
		mode: 'no-cors'
	})
		.then(res => res.text())
		.then(res => {
			console.log(res);
		})
});
