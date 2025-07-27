var isPalindrome = function(s) {
    s1 = s.removeAll(" ");
    s1 = s1.toLowerCase();
    l = s1.length
    for(i=0; i<l/2-1; i++){
        if(s1.at(i)===s1.at(-i-1)){
            continue;
        } else {
            return 0;
        }
    }
    return 1;
};