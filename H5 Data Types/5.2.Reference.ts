
class Reference{
   public main(){

        let animalname = "Lotte";
        console.log(animalname);    //print Lotte

        let animalname2 = animalname;
            animalname = "Noella";  //pass by value

        console.log(animalname2)    //print Lotte

        let animal = {
            name:"Lotte",
            age:30
        };
        console.log(animal);        //print Lotte, 30

       let animal2 = animal;        //pass by reference
        animal2.name = "Noella";
        animal2.age  = 20;
        console.log(animal);        // print Noella, 20

    }
}
new Reference().main();



