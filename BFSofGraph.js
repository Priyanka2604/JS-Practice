/** class Graph {
    constructor(v) {
        this.V = v; // Number of vertices
        this.dj = new Array(v).fill(null).map(() => []); // Adjacency list
    }

    // Function to add an edge to the graph
    addEdge(u, v) {
        this.adj[u].push(v); // Add v to u's list
        //this.adj[v].push(u); // Add u to v's list (for undirected graph)
    }

    // Function to perform BFS traversal from all unvisited vertices
    BFS() {
        let visited = new Array(this.V).fill(false); // Track visited vertices
        let result = []; // To store the BFS traversal order

        for(let i = 0; i < this.V; i++) {
            if(!visited[i]){
                visited[i] = true; // Mark the starting vertex as visited
                let queue = [];
                queue.push(i); // Enqueue the starting vertex

                while(queue.length !== 0) {
                    let curr = queue.shift(); // Dequeue a vertex
                    result.push(curr); // Add it to the result
                    // Traverse all adjacent vertices
                    for(let j of this.adj[curr]) {
                        if(!visited[j]) {
                            visited[j] = true; // Mark as visited
                            queue.push(j); // Enqueue the adjacent vertex
                        }
                    }
                }
            }
        }

        return result; // Return the BFS traversal order
    }
}
*/

// Function to find BFS of Graph from given source s
function BFS(adj) {
    let len = adj.length;
    let s = 0; // source node is 0
    let ans = []; // To store the BFS traversal order

    // Initially mark all the vertices as not visited
    let visited = new Array(len).fill(false); // Track visited vertices

    // Create a queue for BFS
    let queue = [];

    // Mark source node as visited and enqueue it
    visited[s] = true;
    queue.push(s);

    while(queue.length !== 0) {
        let curr = queue.shift();
        ans.push(curr); // Add current node to the result

        // Get all adjacent vertices of the dequeued node
        // If an adjacent vertex has not been visited, mark it visited and enqueue it
        for(let j of adj[curr]) {
            if(!visited[j]){
                visited[j] = true;
                queue.push(j);
            }
        }
    }

    return ans; // Return the BFS traversal order
    
}

// Main execution
let adj = [[1,2], [0,2,3], [0,4], [1,4], [2,3]];
let src = 0; // Starting from vertex 0
let ans = BFS(adj);
console.log("BFS traversal starting from all vertices:");
for(let i of ans) {
    console.log(i + " ");
}


/**
Example usage
let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);        
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log(g.BFS()); // Output: BFS traversal order
*/ 
//module.exports = Graph; // Export the Graph class for use in other files