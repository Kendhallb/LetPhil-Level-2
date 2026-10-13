//  Parsons exercise

const itemPrice = 15; // B
const itemCount = 2; // D
const cartTotal = itemCount + itemPrice; // X

console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`); // Y

//  Modify exercise


const name = "Notebook"; 
let price = "10"; //Turned price into a string
let stock = 12; 
const isOnSale = false;

stock = stock - 2; 

console.log(`NoteBook: Only ${stock} left`);
console.log(typeof name, typeof price, typeof stock, typeof isOnSale);

// I predict that when I change price into a string, the output will be 20 and "102". 20 because "10" * 2 = 20 and coercion wouldn't apply. "102" because coercion does apply since we're adding using the '+' symbol, therefore "10" + 2 = "102".

console.log(price * 2);
console.log(price + 2);