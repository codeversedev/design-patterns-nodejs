import { PaymentService, CreditCardPayment, PayPalPayment, AfterpayPayment } from "./index";

export function runStrategyDemo(): void {
  console.log("=== Strategy Pattern Demo ===\n");

  const paymentService = new PaymentService(new CreditCardPayment("4111111111111234"));
  console.log(paymentService.checkout(99.99));

  paymentService.setStrategy(new PayPalPayment("user@example.com"));
  console.log(paymentService.checkout(49.99));

  paymentService.setStrategy(new AfterpayPayment(4));
  console.log(paymentService.checkout(199.99));

  console.log("");
}
