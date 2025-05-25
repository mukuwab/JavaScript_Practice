console.log("--------Push method-------");

let rows = []; //Create new empty array
let characters = "x"; //Initiate value to hold character x

//Push method
rows.push(characters); //Call rows, push value to the END of the array

console.log(rows);//Print rows


//Push Method; ex 2
rows.push("dog");

console.log (rows)

///////////////////////////////
console.log ("\n\n")
//////////////////////////////

console.log("--------Push method using a loop-------");

let rows2= [];
let characters2 = "w";
let count = 10;

for(i=0; i<count; i=i+1){
    rows2.push(characters2);
    console.log(rows2)
}
