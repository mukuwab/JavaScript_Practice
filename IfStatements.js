//IF STATEMENTS

//An if statement allows you to run a block of code only when a condition is met

/* if(condition){
    logic
    }       */
    
    
if(true){
    console.log("The condition is true");
}

if(false){
    console.log("The condition is true");
}//no output


console.log("///////");
//TRUTHY and FALSLEY VALUES

if("false"){
    console.log("The condition is true");
}//has output


/*The text has appeared again! This is because "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value.

A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

Try changing your if condition to an empty string "", which is a falsy value.*/

if(null){
    console.log("The condition is true");
}//no output



////ELSE-IF STATEMENTS

//In addition to if statements, JavaScript also has else if statements. else if statements allow you to check multiple conditions in a single block of code.

/*if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
} */

if ("") {
  console.log("Condition is true");
}
else if(5<10){
  console.log("5 is less than 10");
}


/*p 83
Sometimes you will want to run different code when all of the if...else if conditions are false. You can do this by adding an else block.

An else block will only evaluate if the conditions in the if and else if blocks are not met.

Here the else block is added to the else if block.*/

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
}
else{
  console.log("This is the else block");
}




