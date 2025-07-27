var infixToPrefix = (s) => {
        //your code here
        s = reverse(s);
        let st = [], ans = "";
        for(let i=0;i<s.length;i++){
            if(s[i]>='A' && s[i]<='Z' || s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9'){
               ans += s[i]; 
            }
            else if(s[i]==="("){
                st.push(s[i]);
            }
            
            else if(s[i]===")"){
                while(st.length && (st[st.length-1]!=="(")){
                    ans += st.pop();
                }
                st.pop();
            }
            
            else{
                if(s[i]==="^"){
                    while(st.length && prec(st[st.length-1])>=prec(s[i])){
                        ans += st.pop();
                    }
                }
                st.push(s[i]);
            }
        }
        
        while(st.length!==0){
            ans += st.pop();
        }

        ans = reverse(ans);
        
        return ans;
    }
    
var reverse = (s) => {
    let sr = "";
    for(let i=0;i<s.length;i++){
        if(s[s.length - 1-i]==='('){
            sr += ')';
        }
        else if(s[s.length-1-i]===')'){
            sr += '(';
        }
        else {
            sr += s[s.length-1-i];
        }
    }
    
    return sr;
}

var prec = (ch) => {
    if(ch==='+' || ch==='-'){
        return 1;
    }
    else if(ch==='*' || ch==='/'){
        return 2;
    }
    else if(ch==='^'){
        return 3;
    }
    
    return -1;
}
let ans = infixToPrefix("x+y*z/w+u");
console.log(ans);
console.log(typeof(ans));