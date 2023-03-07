import './style.css'

// Define the prices and quantities
const bananaPrice: number = 1;
const bananaQuantity: number = 6;
const applePrice: number = 1.5;
const appleQuantity: number = 3;
const winePrice: number = 10;
const wineQuantity: number = 2;

// Calculate the total price
const totalPrice: number = bananaPrice * bananaQuantity + applePrice * appleQuantity + winePrice * wineQuantity;

// Calculate the tax
const fruitTax: number = 0.06 * (bananaPrice * bananaQuantity + applePrice * appleQuantity);
const wineTax: number = 0.21 * winePrice * wineQuantity;
const totalTax: number = fruitTax + wineTax;

// Print the results
console.log(`Total price: €${totalPrice}`);
console.log(`Total tax: €${totalTax}`);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h3>A basket contains the following things:</h3>

<ul>
  <li>Banana's (6 pieces, costing €1 each)</li>
  <li>Apples (3 pieces, costing €1.5 each) </li>
  <li>Bottles of wine (2 bottles, costing €10 each) </li>
  <li>Without using classes, do the following in your code: </li>
</ul>

Calculate the total price
Calculate how much of the total price is tax (fruit goes at 6%, wine is 21%) <br>
Next, do the same with classes. 
What style do you prefer? Do you notice any difference in time needed to code, structure or readability? 
<br><br>
From now on, 
if nothing is stated specifically, it's recommended to use classes.
<hr>
<p>Total price: €${totalPrice}</p>
<p>Total tax: €${totalTax}</p>
</div>
`


