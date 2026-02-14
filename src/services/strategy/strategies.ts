// Strategy Interface
export interface PaymentStrategy {
  pay(amount: number): string;
}

// Concrete Strategies
export class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): string {
    return `Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`;
  }
}

export class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): string {
    return `Paid $${amount} using PayPal account ${this.email}`;
  }
}

export class AfterpayPayment implements PaymentStrategy {
  constructor(private installments: number = 4) {}

  pay(amount: number): string {
    const perInstallment = (amount / this.installments).toFixed(2);
    return `Paid $${amount} using Afterpay in ${this.installments} installments of $${perInstallment}`;
  }
}
