console.log("--------Pop Method-------");
//The pop method removes the last item of an array an returns it


console.log("You put some items into the cart:")
let shoppingCart = ['bread', 'yogurt', 'bananas', 'tea'];

console.log(shoppingCart + "\n");

console.log("Hmmm, what was the last item you put into the cart?");

//Pop Method

let lastItem = shoppingCart.pop(); //removes the last index in the array and stores it within the variable 'lastItem'

console.log("The last item you added to your shopping cart was "+lastItem+"\n");

console.log("Now that you have removed this item, which items remain in the cart?");

console.log(shoppingCart);

