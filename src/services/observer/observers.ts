import { Observer } from "./interfaces";

// Concrete Observers
export class EmailObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [EmailObserver] Event "${event}" → Sending email notification:`, data);
  }
}

export class LogObserver implements Observer {
  private entries: Array<{ event: string; data: unknown; timestamp: Date }> = [];

  update(event: string, data: unknown): void {
    this.entries.push({ event, data, timestamp: new Date() });
    console.log(`  [LogObserver] Event "${event}" → Logged (${this.entries.length} total entries)`);
  }

  getEntries() {
    return [...this.entries];
  }
}

export class SlackObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [SlackObserver] Event "${event}" → Posting to Slack:`, data);
  }
}
