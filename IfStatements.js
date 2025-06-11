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
