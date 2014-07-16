var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
process.stdin.setEncoding('utf8');
var data = "";
process.stdin.on('readable', function() {
	console.log('Enter a name: ');
  	data = process.stdin.read();

});
var position= names.indexOf(data);
if (position >= 0) {
	console.log("Found " + data + "at position " + position);
} else {
	console.log(data + " not found in array.");
}