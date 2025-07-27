function sumOfDivisors(n) {
    /*let num = n, sum = 0, res=0;
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
            if(i%j===0){
                sum += j;
            }
        }
    }
    return sum;
    */
    let sum = 0;
    for (let i = 1; i <= n; ++i)
        console.log(Math.floor(n / i));
        sum += Math.floor(n / i) * i;
    return sum;
}

console.log(sumOfDivisors(4));