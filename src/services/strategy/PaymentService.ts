import { PaymentStrategy } from "./strategies";

// Context
export class PaymentService {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(amount: number): string {
    return this.strategy.pay(amount);
  }
}
