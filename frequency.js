
var frequencyCount = function(arr){
    //let a = [arr[arr.length-1]];
    let a = new Array(arr.length).fill(0);
    // for(let i=0;i<=arr[arr.length-1];i++){
    //     a[arr[i]-1] = 0;
    // }
    for(let j=0;j<=arr.length;j++){
    a[arr[j]-1] += 1;
    }
    return a;
}

console.log(frequencyCount([2,1,1]));