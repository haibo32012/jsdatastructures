var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name = "Mike";

var firstPos = names.indexOf(name);
console.log("First found " + name + "at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);

var namestr = names.join();
console.log(namestr);
var namestring = names.toString( );
console.log(namestring);

console.log(names);