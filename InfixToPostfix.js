var infixToPostfix = (s) => {
    // code here
    let st = [];
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z") ||
            (s[i] >= "0" && s[i] <= 9)) {
            ans += s[i];
        }

        else if (s[i] === "(") {
            st.push(s[i]);
        }

        else if (s[i] === ")") {
            while (st.length && (st[st.length - 1] !== "(")) {
                ans += st.pop();
            }
            st.pop();
        }

        else {
            while (st.length && prec(st[st.length - 1]) >= prec(s[i])) {
                ans += st.pop();
            }
            st.push(s[i]);
        }
    }

    while (st.length !== 0) {
        ans += st.pop();
    }

    return ans;
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

console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"));