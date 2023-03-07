import './style.css'

class Item {
  name: string;
  price: number;
  quantity: number;
  taxRate: number;
  discount: number;

  constructor(name: string, price: number, quantity: number, taxRate: number, discount: number = 0) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.taxRate = taxRate;
    this.discount = discount;
  }

  getPrice(): number {
    const discountedPrice = this.price * (1 - this.discount / 100);
    return discountedPrice * this.quantity;
  }

  getTax(): number {
    return this.taxRate * this.getPrice();
  }
}

const banana: Item = new Item("Banana", 1, 6, 0.06, 50);
const apple: Item = new Item("Apple", 1.5, 3, 0.06, 50);
const wine: Item = new Item("Wine", 10, 2, 0.21);
const items: Item[] = [banana, apple, wine];

console.log(items);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Case 2</h1>
    <p>Consider the same basket as in use case 1. 
    The shop owner wants to have a way to have 50% off every fruit. <br> 
    Can you find a way to implement the discount once, and re-use it efficiently for every fruit?</p>

    <h2>Items</h2>
    <ul>
      ${items.map(item => `
        <li>
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Tax Rate: ${item.taxRate}</p>
          <p>Discount: ${item.discount}</p>
          <p>Price: ${item.getPrice()}</p>
          <p>Tax: ${item.getTax()}</p>
        </li>
      `).join('')}
    </ul>

  </div>
`


