import { Observer, Subject } from "./interfaces";

// Concrete Subject — an event-based notification hub
export class EventBus implements Subject {
  private listeners: Map<string, Set<Observer>> = new Map();

  subscribe(event: string, observer: Observer): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(observer);
  }

  unsubscribe(event: string, observer: Observer): void {
    this.listeners.get(event)?.delete(observer);
  }

  notify(event: string, data: unknown): void {
    const observers = this.listeners.get(event);
    if (observers) {
      for (const observer of observers) {
        observer.update(event, data);
      }
    }
  }
}
