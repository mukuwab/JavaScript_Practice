
//UNSHIFT METHOD

/*The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.*/

let fruits = ["Apples", "Oranges", "Cherries"];
console.log(fruits);

//Unshift Method -- add a fruit to the beginning of the list


fruits.unshift("Pineapples");

console.log(fruits);


//Unshifted MEthod

/*Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. Here is an example of the .shift() method:*/

fruits.shift(); //removes the first element, the newly added Pineapple
console.log(fruits);

/*.shift() does not take any arguments.

It always removes the first element of the array, no matter what.

Passing "Apples" to .shift() does nothing; the argument is ignored.

*/
