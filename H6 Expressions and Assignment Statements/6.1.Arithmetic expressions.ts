class ArithMeticExpressions {
    public main (){
        let k = 70, j = 30;
        let stringVal1 = "Hello", stringVal2 = "World";

        console.log(k+j);  //Output 100
        console.log(k-j);  //Output 40
        console.log(-k);   //Output -70
        console.log(k*j);  //Output 2100
        console.log(k**j); //Output 2.253934029069226e+55
        console.log(k/j);  //Output 2.3333333333333335
        console.log(k%j);  //Output 10
        console.log(k++);  //Output 70, but it is now 71
        console.log(k--);  //Output 71, but it is now 70
        console.log(stringVal1, stringVal2); //Output Hello World
    }
}

new ArithMeticExpressions().main();


