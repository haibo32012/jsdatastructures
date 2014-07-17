function Node(data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;

	function show() {
		return this.data;
	}
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;
	this.removeNode = removeNode;
	this.update = update;
	//this.prArray = prArray;
	//this.genArray = genArray;

	function insert(data) {
		var n = new Node(data, null, null);
		if (this.root == null) {
			this.root = n;
		}
		else {
			var current = this.root;
			var parent;
			while(true) {
				parent = current;
				if(data < current.data) {
					current = current.left;
					if (current == null) {
						parent.left = n;
						break;
					}
				}
				else {
					current = current.right;
					if (current == null) {
						parent.right = n;
						break;
					}
				}
			}
		}
	}

	function inOrder(node) {
		if (!(node == null)) {
			inOrder(node.left);
			console.log(node.show() + " ");
			inOrder(node.right);
		}
	}

	function preOrder(node) {
		if (!(node == null)) {
			console.log(node.show() + " ");
			preOrder(node.left);
			preOrder(node.right);
		}
	}

	function postOrder(node) {
		if (!(node == null)) {
			postOrder(node.left);
			postOrder(node.right);
			console.log(node.show() + " ");
		}
	}

	function getMin() {
		var current = this.root;
		while(!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	}

	function getMax() {
		var current = this.root;
		while(!(current.right == null)) {
			current = current.right;
		}
		return current.data;
	}

	function find(data) {
		var current = this.root;
		while(current.data != data) {
			if (data < current.data) {
				current = current.left;
			}
			else {
				current = current.right;
			}
			if (current == null) {
				return null;
			}
		}
		return current;
	}

	function remove(data) {
		root = removeNode(this.root, data);
	}

	function removeNode(node, data) {
		if (node == null) {
			return null;
		}
		if (data == node.data) {
			if (node.left == null && node.right == null) {
				return null;
			}

			if (node.left == null) {
				return node.right;
			}

			if (node.right == null) {
				return node.left;
			}

			var tempNode = getSmallest(node.right);
			node.data = tempNode.data;
			node.right = removeNode(node.right, tempNode.data);
			return node;
		}

		else if(data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	}

	function update(data) {
		var grade = this.find(data);
		grade.count++;
		return grade;
	}


}

	function prArray(arr) {
		console.log(arr[0].toString() + ' ');
		for(var i =0; i < arr.length; ++i) {
			console.log(arr[i].toString() + ' ');
			if (i % 10 == 0) {
				console.log("\n");
			}
		}
	}

	function genArray(length) {
		var arr = [];
		for(var i =0; i < length; ++i) {
			arr[i] = Math.floor(Math.random() * 101);
		}
		return arr;
	}

// main program

/*var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

/*console.log("Inorder travseral: ");
nums.inOrder(nums.root);
nums.preOrder(nums.root);*/

/*var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);*/

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for(var i = 0; i < grades.length; ++i) {
	var g= grades[i];
	var grade = gradedistro.find(g);
	if (grade == null) {
		gradedistro.insert(g);
	}
	else {
		gradedistro.update(g);
	}
}

var cont = "y";
while(cont == "y") {
	console.log("\n\n Enter a grade: ");
	var g = parseInt(readline());
	var aGrade = gradedistro.find(g);
	if (aGrade == null) {
		console.log("No occurrences of " + g);
	} else {
		console.log("occurrences of " + g + ": " + aGrade.count);
	}
	console.log("Look at another grade (y/n)? ");
	cont = readline();
}