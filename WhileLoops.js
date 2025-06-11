//WHILE LOOPS
//A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:


/*while (condition) {
  logic;
}*/

//Avoid infinite loops--> will lock computer, always have exit condition


let continueLoop = true
let i=0;

while(continueLoop==true){
    //use == since you are comparing the value of continueLoop NOT assigning it the value of 0!
    i++;
    console.log(i);
    
    if(i==10){
        //use == b/c need to compare value of i, NOT assign a new value of 10
        continueLoop = false;
    }//End: if
}//End: while

console.log("This loop has terminated")
