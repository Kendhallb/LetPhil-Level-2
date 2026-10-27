/* ### 1. Parsons

Goal output:

```
true
false
```

```
A   function isEven(n) {
B   return n % 2 === 0;
C   }
D   console.log(isEven(4));
E   console.log(isEven(7));
X   return n % 2;
Y   console.log(n % 2 === 0);
``` */

 function isEven(n) { // A
    return n % 2 === 0; // B
 } // C
 console.log(isEven(4)); // D
 console.log(isEven(7)); // E

// ABCDE

/* ### 2. Modify

> Add a function `isGoodTip(percent)` to your tip calculator. It returns `true` if the percent is 15 or more, `false` otherwise.
>
> Then, **outside the function**, use it with a ternary to log either `"Generous"` or `"Standard"`.
>
> Write one sentence: why does `isGoodTip` return `true`/`false` instead of returning the word? */

function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

function calculateTotal(bill, tip) {
  return bill + tip;
}

const splitBill = (total, people) => total / people;

function format(amount) {
  return `$${amount}`;
}

function isGoodTip(percent) {
  if (percent >= 15) {
    return true;
  } 
  return false;
}

const bill = 100;
const tip = calculateTip(bill, 10);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);

console.log(isGoodTip(10) ? "Generous" : "Standard"); 

// I dont really understand the question to be honest. It does return false, but it didn't visually print it because in the ternary, it logs the words "Generous" or "Standard". True/False was just used to make the choice, but is then replaced by the result.