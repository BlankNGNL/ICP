

class TypeEquivalence {
    public main(){
        let firstVal:any = 10;
        let secondVal = 20;
        let obj = new Number(1);
        let bool = true;

        console.log( firstVal == secondVal );   //false
        console.log( firstVal == '10' );        //true



        console.log( firstVal === secondVal );  //false
        console.log( firstVal === 10 );         //true
        console.log( firstVal === '10' );       //false
        console.log( obj === obj );             //true
        console.log( obj === 1 );               //false
        console.log( bool === firstVal );       //false
        console.log(null === undefined );       //false
    }
}

new TypeEquivalence().main();
