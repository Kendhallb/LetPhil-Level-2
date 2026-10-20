// 1. Parsons

// Goal output: `Grade: B` when `score` is `85`.

const score = 85; // B
let grade = ""; // E

if (score >= 90) { // C
    grade = "A"; // F
} else if (score >= 80) { // A
    grade = "B"; // D
} else { // G
    grade = "C"; // H
} // I
console.log(`Grade: ${grade}`); // J

// BECFADGHIJ


// 2. Shipping Calculator

//Take your shipping calculator. Add a rule: **orders over $500 always ship free, even international.**

// Rules
// Memebers always ship free
// Local orders over $50 ship free
// Other local orders cost $5
// International orders cost $15

let orderTotal = 600;
let country = "international";
let isMember = false;

let shippingCost;

// I think the new check should be applied first beacause if an order is over $500, it should bypass all the other conditions to determine free shipping.

if (orderTotal >= 500) {
    shippingCost = 0; 
} else if (isMember) {
    shippingCost = 0;
} else if (country === "local" && orderTotal > 50 ) {
    shippingCost = 0;
} else if (country === "local") {
    shippingCost = 5
} else {
    shippingCost = 15;
}

let label = shippingCost === 0 ? "Free Shipping" : `Shipping ${shippingCost}`;

console.log(label);
