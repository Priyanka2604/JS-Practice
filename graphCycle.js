class Solution {
    isCycle(V, edges) {
        // Code here
        let visited = new Array(V).fill(0);
        
        let adj = new Map();
        
        for(let [u,v] of edges){
            adj.set(u, []);
            adj.set(v, []);
            adj.get(u).push(v);
            adj.get(v).push(u);
        }
        
        for(let i = 0; i < V; i++){
            if(!visited[i]) {
                if(dfs(i, visited, adj, -1)) return true;
            }
        }
        
        return false;
    }
}

var dfs = (node, visited, adj, parent) => {
    visited[node] = 1;
    
    for(let i of adj.get(node)){
        if(!visited[i]){
            if (dfs(i, visited, adj, node)) return true;
        } else if( i !== parent){
            // Found a visited node that's not the parent — cycle exists
            return true;
        }
    }
    
    return false;
}

console.log(new Solution().isCycle(4, [[1,2],[2,3]]));
