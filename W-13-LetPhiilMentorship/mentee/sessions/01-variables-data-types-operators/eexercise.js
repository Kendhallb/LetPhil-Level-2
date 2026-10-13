//  Parsons exercise

const itemPrice = 15; // B
const itemCount = 2; // D
const cartTotal = itemCount * itemPrice; // A

console.log(`Cart: ${itemCount} items, total ${cartTotal}`); // C

//  Modify exercise


const name = "Notebook"; // const because name won't change
let price = "10"; // let because price can change
let stock = 12; // let because stock can change
const isOnSale = false; // const because it is not on sale

stock = stock - 2; // sold 2 stock

console.log(`NoteBook: Only ${stock} left`);

console.log(typeof name);
console.log(typeof price);
console.log(typeof stock);
console.log(typeof isOnSale);

console.log(price * 2); // I predict the price output to be 20 because coercion won't apply and multiplication converts the string to a number.
console.log(price + 2); // I predict the price output to be "102" because coercion does apply since we're adding using the '+' symbol.