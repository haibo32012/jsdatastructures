function Graph(v) {
	this.vertices = v;
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

// main program

var gr = new Graph(5);
gr.addEdge(0,1);
gr.addEdge(0,2);
gr.addEdge(1,3);
gr.addEdge(2,4);
gr.showGraph();
gr.bfs(0);