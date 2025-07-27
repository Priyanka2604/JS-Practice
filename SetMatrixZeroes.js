/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    let rowArr = new Array(m).fill(0);
    let colArr = new Array(matrix[0].length).fill(0);
    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                rowArr[i] = 1;
                colArr[j] = 1;
            }
        }
    }

    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(rowArr[i] || colArr[j]){
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

// var markRow = function(matrix,n,i) {
//     for(let j=0;j<n;j++){
//         if(matrix[i][j]!==0){
//             matrix[i][j] = _;
//         }
//     }
// }

// var markCol = function(matrix,n,j) {
//     for(let i=0;i<n;i++){
//         if(matrix[i][j]!==0){
//             matrix[i][j] = _;
//         }
//     }
// }

console.table(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));