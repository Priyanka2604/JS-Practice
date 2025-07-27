/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let visited = Array(n).fill(0).map(() => Array(m).fill(0));
    console.log(visited);
    
    for(let i=0; i < n; i++){
        for(let j=0; j < m; j++){
            //console.log(visited[i]);    
        }
    }
};

console.log(numIslands([ ["1","1","0","0","0"],
                         ["1","1","0","0","0"],
                         ["0","0","1","0","0"],
                         ["0","0","0","1","1"] ]));
