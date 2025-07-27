class MinStack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        let min;
        if (this.stack.length===0) {
            min = val;
        } else {
            min = Math.min(this.stack[this.stack.length - 1].min, val);
        }
        this.stack.push(new Pair(val, min));
        return this.stack;
    }
    pop(val) {
        return this.stack.pop();
    }
    top(val) {
        return this.stack[this.stack.length - 1].val;
    }
    getMin(val) {
        return this.stack[this.stack.length - 1].min;
    }
}

class Pair{
    constructor(val, min){
        this.val = val;
        this.min = min;
    }
}




let st = new MinStack([]);
st.push(-2);
st.push(0);
st.push(-3);
console.log(st.getMin());
console.log(st.pop());
console.log(st.top());
console.log(st.getMin());

//console.log(st.top());