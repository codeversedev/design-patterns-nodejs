import { EventBus, EmailObserver, LogObserver, SlackObserver } from "./index";

export function runObserverDemo(): void {
  console.log("=== Observer Pattern Demo ===\n");

  const eventBus = new EventBus();

  const emailObserver = new EmailObserver();
  const logObserver = new LogObserver();
  const slackObserver = new SlackObserver();

  // Subscribe observers to events
  eventBus.subscribe("user:signup", emailObserver);
  eventBus.subscribe("user:signup", logObserver);
  eventBus.subscribe("user:signup", slackObserver);
  eventBus.subscribe("order:placed", emailObserver);
  eventBus.subscribe("order:placed", logObserver);

  // Emit events
  console.log('Emitting "user:signup":');
  eventBus.notify("user:signup", { userId: "u-1", email: "alice@example.com" });

  console.log('\nEmitting "order:placed":');
  eventBus.notify("order:placed", { orderId: "o-100", total: 59.99 });

  // Unsubscribe and emit again
  eventBus.unsubscribe("user:signup", slackObserver);
  console.log('\nEmitting "user:signup" after unsubscribing SlackObserver:');
  eventBus.notify("user:signup", { userId: "u-2", email: "bob@example.com" });

  console.log("");
}
