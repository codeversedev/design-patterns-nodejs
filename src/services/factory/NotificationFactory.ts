import {
  Notification,
  EmailNotification,
  SMSNotification,
  PushNotification,
} from "./notifications";

export type NotificationType = "email" | "sms" | "push";

// Factory
export class NotificationFactory {
  static create(type: NotificationType): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}
