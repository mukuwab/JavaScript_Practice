//Example 1 --> add two numbers using a function
function addTwoNumbers(num1, num2){//declare the variables inside the parathensis 
    //declare a function by: function _____(){}
    //num1 and num2 are the parameters of the function. 
    //parameter(s) is the value or values that you put into a function
    //arguments are the values or value that comes out of a function
    //arguments have to be returned using the 'return' keyword

  return num1+num2;//return the sum of the two parameters
}


//the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.


///assign function to a variable so the output can be printed 
//pass two values into the parameters
const sum = addTwoNumbers(5,10);
console.log(sum);//print the value



//Hardcoded function
function testName (name){
    return name = "Mukuwa";
}

const nameIs =  testName();
console.log(nameIs);


//Concatination function
function fullNamefunc(firstName,lastName){
    
    return firstName+" "+lastName;
    
};
const fullName = fullNamefunc("John","Doe");
console.log(fullName)
