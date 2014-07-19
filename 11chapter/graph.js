function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	for(var i =0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.marked = [];
	for(var i =0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;
	this.edgeTo = [];
	this.hasPathTo = hasPathTo;
	this.pathTo = pathTo;
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for(var i=0; i < this.vertices; ++i) {
		console.log(i + " -> ");
		for(var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined)
				console.log(this.adj[i][j] + ' ');
		}
		// console.log();
	}
}

function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		console.log("Visited vertex: " + v);
	}
	for (var w in this.adj[v]) {
		if (!this.marked[w]) {
			this.dfs(w);
		}
	}
}

function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0) {
		var v = queue.shift();
		if (v == undefined) {
			console.log("Visited vertex: " + v);
		}
		for (var w in this.adj[v]) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}

function topSort() {
	var stack = [];
	var visited = [];
	for(var i=0; i<this.vertices; i++) {
		visited[i] = false;
	}
	for(var i=0; i<this.vertices; i++) {
		if (visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for(var i=0; i<stack.length; i++) {
		if (stack[i] != undefined && stack[i] != false) {
			console.log(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	for(var w in this.adj[v]) {
		if (!visited[w]) {
			this.topSortHelper(visited[w], visited, stack);
		}
	}
	stack.push(v);
}

function hasPathTo(v) {
	return this.marked[v];
}

function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for(var i=v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(s);
	return path;
}

// main program

var gr = new Graph(6);
gr.addEdge(1,2);
gr.addEdge(2,5);
gr.addEdge(1,3);
gr.addEdge(1,4);
gr.addEdge(0,1);
gr.vertexList = ["CS1", "CS2", "Data Structures", 
"Assembly Language", "Operating Systems",
"Algorithms"];
gr.showGraph();
gr.topSort();