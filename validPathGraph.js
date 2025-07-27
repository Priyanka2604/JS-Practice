var validPath = function(n, edges, source, destination) {
    // Initialize parent array where each node is its own parent
    const parent = new Array(n).fill(0).map((_, i) => i);

    // Find with path compression
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    // Union by setting parent of root of one to another
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    };

    // Build connected components
    for (const [a, b] of edges) {
        union(a, b);
    }

    // Check if source and destination are in the same component
    return find(source) === find(destination);
};


console.log(validPath(5, [[0,1],[0,2],[1,3],[2,4],[3,4]], 0, 4));