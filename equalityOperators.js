//The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.

/*The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.*/

let numGrapes = 3;
let numApples = 6;
let numKiwis = 3;
let name1= "Sofia";
let name2= "Fiona";
let name3= "Sofia";

//////////////////////////////////////////////////////////////////////////
if(name1==name2){
    console.log("These names are the same");
}
else{
    console.log("These names are not the same");
}

///////////////////////////////////////////////////////////////////////

if(name1==name3){
    console.log("These names are the same");
}
else{
    console.log("These names are not the same");
}

///////////////////////////////////////////////////////////////////////////

if(0=="0"){
    console.log("These numbers are the same (but not necessarily the same type");
}
else{
    console.log("These numbers are not the same");
    
}
///////////////////////////////////////////////////////////////////////////

if(0==="0"){
    console.log("These numbers are the same (but not necessarily the same type");
}
else{
    console.log("These numbers are not the same or the same type");
}

///////////////////////////////////////////////////////////////////////////

if("0"==="0"){
    console.log("These numbers are the same (but not necessarily the same type");
}
else{
    console.log("These numbers are not the same or the same type");
}
/////////////////////////////////////////////////////////////////////

if(numGrapes==numApples){
    console.log("These fruits have the same quantity");
}
else{
    console.log("These fruits have different quantities");
}
/////////////////////////////////////////////////////////////////////

if(numKiwis==numGrapes){
    console.log("These fruits have the same quantity");
}
else{
    console.log("These fruits have different quantities");
}



/*The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.

Currently the while loop runs only if continueLoop is true. Update the while loop condition to check if done is not equal to count.*/


if(numKiwis!==numGrapes){
    console.log("These fruits do not have the same quantity");
}
else{
    console.log("These fruits have the same quanitity");
}

///////////////////////////////////////////////////////////////////////////

if(numKiwis!==numApples){
    console.log("These fruits do not have the same quantity");
}
else{
    console.log("These fruits have the same quanitity");
}
