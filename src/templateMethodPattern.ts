// Template Method: Picture a versatile recipe for cookies—main steps with room for custom tweaks.

abstract class ShoppingCart {
  abstract calculateTotal(): number;

  checkout(): void {
    const total = this.calculateTotal();
    console.log(`Total amount: $${total}`);
    this.processPayment(total);
    this.sendConfirmationEmail();
  }

  abstract processPayment(amount: number): void;
  abstract sendConfirmationEmail(): void;
}

class BasicCart extends ShoppingCart {
  calculateTotal(): number {
    return 100;
  }

  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }

  sendConfirmationEmail(): void {
    console.log("Sending confirmation email");
  }
}

export default ((): void => {
  const cart = new BasicCart();
  cart.checkout();
})();
