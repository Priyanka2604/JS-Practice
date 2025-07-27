
    // Function to check whether the number evenly divides n.
function evenlyDivides(n) {
    // code here
    // {let a = n;
    // let c=0, r=0;
    // while(n>0){
    //     r = n%10;
    //     if(r!=0 && a%r==0){
    //         c++;
    //     }
    //     n = Math.floor(n/10);
    // }
    // console.log(c);
    // return c;
    // }
    console.log(Math.floor(Math.log10(n)+1))
}

evenlyDivides(85);
