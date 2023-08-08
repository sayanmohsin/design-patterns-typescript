// Composite: Envision packing for a trip—fits individual items or entire groups neatly.

interface InventoryItem {
  getName(): string;
  getStock(): number;
}

class Item implements InventoryItem {
  constructor(private name: string, private stock: number) {}

  getName(): string {
    return this.name;
  }

  getStock(): number {
    return this.stock;
  }
}

class Warehouse implements InventoryItem {
  private items: InventoryItem[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  addItem(item: InventoryItem): void {
    this.items.push(item);
  }

  removeItem(item: InventoryItem): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getStock(): number {
    let totalStock = 0;
    for (const item of this.items) {
      totalStock += item.getStock();
    }
    return totalStock;
  }
}

export default ((): void => {
  const warehouse1 = new Warehouse("Warehouse 1");

  const item1 = new Item("Widget", 100);
  const item2 = new Item("Gadget", 50);

  warehouse1.addItem(item1);
  warehouse1.addItem(item2);

  const warehouse2 = new Warehouse("Warehouse 2");

  const item3 = new Item("Accessory", 30);
  const item4 = new Item("Tool", 20);

  warehouse2.addItem(item3);
  warehouse2.addItem(item4);

  console.log(
    `Total stock in ${warehouse1.getName()}: ${warehouse1.getStock()} items`
  );
  console.log(
    `Total stock in ${warehouse2.getName()}: ${warehouse2.getStock()} items`
  );
})();
