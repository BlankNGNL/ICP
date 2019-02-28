class Typechecking{
    main(){

        type Animal = {
            name:String,
            age:number
        }

        let z = "Hello World";
        let x = 69;
        let y = new Array();
        let u = function () {
            return false;        };
        let animal: Animal ={name:"Ezel",age:21};
        let k = undefined;
        let n = Symbol();
        let j = false;
        let r = null;

        console.log(typeof z);          // String
        console.log(typeof x);          // Number
        console.log(typeof y);          // Object
        console.log(typeof u);          // Function
        console.log(typeof animal);     // Object
        console.log(typeof  k);         // Undefined
        console.log(typeof  n);         // Symbol
        console.log(typeof  j);         // Boolean
        console.log(typeof  r);         // Object
        
    }
}
new Typechecking().main();

