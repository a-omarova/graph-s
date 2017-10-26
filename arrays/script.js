//forEach

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((elem, i) => console.log(elem * i));


const Person = function(name) {
	this.name = name;
};

Person.prototype.say = function(phrase) {
	console.log(this.name + ' says ' + phrase);
};

Person.prototype.mumble = function(phrases) {
	phrases.forEach(function(phrase) {
		this.say(phrase);
	}, this);
};

const johnDoe = new Person('John Doe');
johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);


const each1 = function (arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
};

each1([1, 2, 3], function(num, i, nums) {
	console.log('Number: ' + num + ', index: ' + i + ',', nums)
});

const each = function(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		callback.call(thisArg, arr[i], i, arr);
	}
};


const nums = [10, 20, 30, 40];
const results = nums.map(function(num, index, arr) {
	return Math.pow(num, index);
});

console.log(nums, results, 'num, results');

const nums2 = [10, 20, 30, 40];
const results2 = nums.forEach(function(num, index, arr) {
	return Math.pow(num, index);
});

console.log(nums2, results2, 'num2, results2');