/*function compare(num1, num2) {
	return num1 - num2;
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);

function square(num) {
	console.log(num, num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

function isEven(num) {
	return num%2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
	console.log("all numbers are even");
} else {
	console.log("not all numbers are even");
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if(someEven) {
	console.log("some numbers are even");
} else {
	console.log("no numbers are even");
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
	console.log("some numbers are even");
} else {
	console.log("no numbers are even");
}
// reduce function
function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);

function concat(accumulatedString, item) {
	return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox"];
var sentence = words.reduce(concat);
console.log(sentence);

// reduceRight() function
var sentence = words.reduceRight(concat);
console.log(sentence);

// map() function

function curve(grade) {
	return grade += 5;
}

var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
console.log(newgrades);

function first(word) {
	return word[0];
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym.join(""));

// filter() function

function isOdd(num) {
	return num % 2 != 0;
}
var nums = [];
for(var i=0; i<20; ++i) {
	nums[i] = i+1;
}

var even = nums.filter(isEven);
console.log("Even numbers: ");
console.log(even);
var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);

function passing(num) {
	return num >= 60;
}

var grades = [];
for(var i=0; i<20; ++i) {
	grades[i] = Math.floor(Math.random() * 101);
}

var passGrades = grades.filter(passing);
console.log('All grades: ');
console.log(grades);
console.log('passing grades: ');
console.log(passGrades);

function afterc(str) {
	if (str.indexOf("cie") > -1) {
		return true;
	}
	return false;
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled);*/

/*var grades = [[89,77,78],[76,82,81],[91,94,89]];
var total = 0;
var average = 0.0;
for(var row = 0; row <grades.length;++row) {
	for (var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
	total = 0;
	average = 0.0;
}*/

var grades = [[89,77],[76,82,81],[91,94,89,99]];
var total = 0;
var average = 0.0;
for(var row = 0; row<grades.length; row++) {
	for(var col = 0; col < grades[row].length;  col++) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log("Student " + parseInt(row + 1) + " average: " +
		average.toFixed(2));
	total = 0;
	average = 0.0;
}