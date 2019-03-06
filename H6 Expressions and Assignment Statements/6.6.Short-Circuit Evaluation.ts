class ShortCircuit {
    public main() {
        function val1(): boolean {
            console.log("Value 1");
            return true;
        }

        function val2(): boolean {
            console.log("Value 2")
            return false
        }

        if (val1() && val2()) { //Print Value 1 en Value 2
            console.log("Shouldn't print");
        }
        if (val2() && val1()) { //Print alleen Value 2
            console.log("Shouldn't print");
        }
        if (val1() || val2()) { //Print Value 1 en True
            console.log("The boolean expression is true");
        }
        if (val2() || val1()) { //Print Value 2, Value 1 en True
            console.log("The boolean expression is true");
        }

    }
}

new ShortCircuit().main();