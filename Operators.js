//ADDITION OPERATOR

//The addition operator is not the only way to add values to a variable. The addition assignment operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:

let total = 9;
//if the value of a variable will be reassigned in the future, you MUST use the let variable type instead of const. 
//The const variable type CANNOT to reassigned, it is permenant
//const to meant to be used for valuables that are meant to maintain a constant, unchanging value

total +=1 ; //Adds one to the variable, then reassigns it to the variable

//total = total + 1  ==  total += 1

console.log("The new value is: "+total);


//SUBSTRACTION OPERATOR
let total2 = 9;
total2-= 1;
console.log("The new value is: "+total2);


//the increment operator ++. This operator increases the value of a variable by 1, updating the assignment for that variable.

let total3 = 9;
total3++;
console.log("The new value is: "+total3);
