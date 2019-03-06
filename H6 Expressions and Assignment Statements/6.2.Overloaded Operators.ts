class OverloadedOperator {
    toString() {
        return "I am "+(9+10);
    }
}

let x = new OverloadedOperator();
console.log('X says ' + x); // Prints "X says I am 19"
