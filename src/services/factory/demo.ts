import { NotificationFactory, NotificationType } from "./index";

export function runFactoryDemo(): void {
  console.log("=== Factory Pattern Demo ===\n");

  const types: NotificationType[] = ["email", "sms", "push"];

  for (const type of types) {
    const notification = NotificationFactory.create(type);
    console.log(notification.send("john@example.com", `Hello via ${type}!`));
  }

  console.log("");
}
