function lcm(a,b) {
    // {let gcd = 1;
    // for(let i=Math.min(a,b); i>=1 ; i--){
    //     if(a%i===0 && b%i===0){
    //         gcd = i;
    //         break;
    //     }
    // }
    // let lcm = (a*b)/gcd;     
    // return [lcm, gcd];
    // }

    while(a>0 && b>0){
        if(a>b){
            a %= b;
        } else{
            b %= a;
        }
    }

    if(a===0){
        return b;
    }
    return a;
}

console.log(lcm(9, 15));