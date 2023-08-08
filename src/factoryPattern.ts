// Factory: Picture a toy factory humming with an organized process—swift, worry-free making.

interface PaymentGateway<T> {
  processPayment(amount: number): void;
  getDetails(): T;
}

class CreditCardDetails {
  constructor(public cardNumber: string, public expirationDate: string) {}
}

class PayPalDetails {
  constructor(public email: string) {}
}

class CreditCardGateway implements PaymentGateway<CreditCardDetails> {
  processPayment(amount: number) {
    console.log(`Processing credit card payment of $${amount}`);
  }

  getDetails(): CreditCardDetails {
    return new CreditCardDetails("1234-5678-9012-3456", "12/25");
  }
}

class PayPalGateway implements PaymentGateway<PayPalDetails> {
  processPayment(amount: number) {
    console.log(`Processing PayPal payment of $${amount}`);
  }

  getDetails(): PayPalDetails {
    return new PayPalDetails("john.doe@example.com");
  }
}

function createPaymentGateway<T>(
  gatewayType: new () => PaymentGateway<T>
): PaymentGateway<T> {
  return new gatewayType();
}

export default ((): void => {
  const creditCardGateway = createPaymentGateway(CreditCardGateway);
  creditCardGateway.processPayment(100);
  const creditCardDetails = creditCardGateway.getDetails();
  console.log("Credit Card Details:", creditCardDetails);

  const payPalGateway = createPaymentGateway(PayPalGateway);
  payPalGateway.processPayment(50);
  const payPalDetails = payPalGateway.getDetails();
  console.log("PayPal Details:", payPalDetails);
})();
