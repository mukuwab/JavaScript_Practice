//WHILE LOOPS
//A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:


/*while (condition) {
  logic;
}*/

//Avoid infinite loops--> will lock computer, always have exit condition


let continueLoop = true
let i=0;

while(continueLoop=true){
    
    i++;
    console.log(i);
    
    if(i=10){
        continueLoop = false;
    }
    
}

console.log("This loop has terminated")
