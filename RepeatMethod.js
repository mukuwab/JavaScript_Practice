//Simple pyramid using for loop

const character = "x";

const array = [];

const count = 5;
const reps = 3

for(i=0; i<count; i=i+1){
    
    array.push(character.repeat(reps))
    //Repeat method takes a number value (can be contained within a variable
    //for an argument and repeats the value 
    console.log(array);
    
}//End: for


// ----Repeat method using a variable

const tree = "Oak ";
console.log("\n\n" + tree.repeat(3));
