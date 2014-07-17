function Dictionary() {
	this.add = add;
	this.dataStore = new Array();
	this.find = find;
	this.remove = remove;
	//this.showAll = showAll;

	function add(key, value) {
		this.dataStore[key] = value;
	}

	function find(key) {
		return this.dataStore[key];
	}

	function remove(key) {
		delete this.dataStore[key];
	}

	/*function showAll() {
		foreach( key in Object.keys(this.dataStore)) {
			console.log(key + " -> " + this.dataStore[key]);
		}
	}*/
}

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
//pbook.showAll();



