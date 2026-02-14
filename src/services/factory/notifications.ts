// Product Interface
export interface Notification {
  send(to: string, message: string): string;
}

// Concrete Products
export class EmailNotification implements Notification {
  send(to: string, message: string): string {
    return `[Email] To: ${to} | Message: ${message}`;
  }
}

export class SMSNotification implements Notification {
  send(to: string, message: string): string {
    return `[SMS] To: ${to} | Message: ${message}`;
  }
}

export class PushNotification implements Notification {
  send(to: string, message: string): string {
    return `[Push] To: ${to} | Message: ${message}`;
  }
}
