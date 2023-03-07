export{}   // this file needs to be a module

class Item {
    name: string;
    price: number;
    quantity: number;
    taxRate: number;
  
    constructor(name: string, price: number, quantity: number, taxRate: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.taxRate = taxRate;
    }
  
    getPrice(): number {
      return this.price * this.quantity;
    }
  
    getTax(): number {
      return this.taxRate * this.getPrice();
    }
  }
  
  class Basket {
    items: Item[];
  
    constructor(items: Item[]) {
      this.items = items;
    }
  
    getTotalPrice(): number {
      let totalPrice: number = 0;
      for (const item of this.items) {
        totalPrice += item.getPrice();
      }
      return totalPrice;
    }
  
    getTotalTax(): number {
      let totalTax: number = 0;
      for (const item of this.items) {
        totalTax += item.getTax();
      }
      return totalTax;
    }
  }
  
  // Define the items in the basket
  const banana: Item = new Item("Banana", 1, 6, 0.06);
  const apple: Item = new Item("Apple", 1.5, 3, 0.06);
  const wine: Item = new Item("Wine", 10, 2, 0.21);
  const items: Item[] = [banana, apple, wine];
  
  // Create a basket with the items
  const basket: Basket = new Basket(items);
  
  // Display the results in the DOM
  const appDiv: HTMLElement = document.getElementById("class");
  appDiv.innerHTML = `
    <h3>(with classes) A basket contains the following things:</h3>
    <p>Total price: €${basket.getTotalPrice()}</p>
    <p>Total tax: €${basket.getTotalTax()}</p>
  `;