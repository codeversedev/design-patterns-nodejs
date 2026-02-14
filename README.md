# Design Patterns in Node.js

A collection of common design patterns implemented in **Node.js** with **TypeScript**. Each pattern lives in its own service folder with a real-world example, making it easy to understand and extend.

## Getting Started

```bash
# Install dependencies
npm install

# Run all pattern demos
npm run dev

# Build
npm run build

# Run compiled output
npm start
```

## Project Structure

```
src/
├── index.ts                          # Entry point — runs all demos
└── services/
    ├── strategy/                     # Strategy Pattern
    ├── factory/                      # Factory Pattern
    ├── facade/                       # Facade Pattern
    ├── iterator/                     # Iterator Pattern
    ├── singleton/                    # Singleton Pattern
    └── observer/                     # Observer Pattern
```

---

## Design Patterns

### 1. Strategy Pattern

**Category:** Behavioural  
**Folder:** `src/services/strategy/`

Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.

**Example:** Payment processing with swappable payment methods.

| Class | Role |
|---|---|
| `PaymentStrategy` | Strategy interface with a `pay(amount)` method |
| `CreditCardPayment` | Pays via credit card |
| `PayPalPayment` | Pays via PayPal |
| `AfterpayPayment` | Pays in installments via Afterpay |
| `PaymentService` | Context that delegates to the current strategy |

```typescript
const service = new PaymentService(new CreditCardPayment("4111111111111234"));
service.checkout(99.99);

service.setStrategy(new AfterpayPayment(4));
service.checkout(199.99);
```

---

### 2. Factory Pattern

**Category:** Creational  
**Folder:** `src/services/factory/`

Provides an interface for creating objects without specifying their concrete classes.

**Example:** Creating different notification channels (Email, SMS, Push).

| Class | Role |
|---|---|
| `Notification` | Product interface with a `send(to, message)` method |
| `EmailNotification` | Sends via email |
| `SMSNotification` | Sends via SMS |
| `PushNotification` | Sends via push notification |
| `NotificationFactory` | Static factory that creates notifications by type |

```typescript
const notification = NotificationFactory.create("email");
notification.send("john@example.com", "Hello!");
```

---

### 3. Facade Pattern

**Category:** Structural  
**Folder:** `src/services/facade/`

Provides a simplified interface to a complex subsystem of classes.

**Example:** File conversion that coordinates downloading, converting, and saving.

| Class | Role |
|---|---|
| `FileDownloadService` | Downloads a file from a URL |
| `ConvertService` | Converts a file to a target format |
| `FileSaveService` | Saves a file to a destination directory |
| `FileConvertFacade` | Orchestrates all three subsystems behind a single `convertFile()` call |

```typescript
const converter = new FileConvertFacade();
const result = converter.convertFile(
  "https://example.com/files/report.docx",
  "pdf",
  "/Users/output"
);
```

---

### 4. Iterator Pattern

**Category:** Behavioural  
**Folder:** `src/services/iterator/`

Provides a way to access elements of a collection sequentially without exposing the underlying representation. Uses generic iterators that work with any type.

**Example:** Iterating over a file collection with optional extension filtering.

| Class | Role |
|---|---|
| `Iterator<T>` | Generic iterator interface (`hasNext`, `next`, `reset`) |
| `GenericIterator<T>` | Iterates over any array of items |
| `FilteredIterator<T>` | Iterates over items matching a predicate |
| `FileCollection` | Collection of `FileItem` objects using generic iterators |

```typescript
const files = new FileCollection();
files.add({ name: "report.pdf", size: 2048, extension: "pdf" });
files.add({ name: "photo.png", size: 5120, extension: "png" });

const allIterator = files.createIterator();
while (allIterator.hasNext()) {
  console.log(allIterator.next().name);
}

const pdfIterator = files.createExtensionIterator("pdf");
```

---

### 5. Singleton Pattern

**Category:** Creational  
**Folder:** `src/services/singleton/`

Ensures a class has only one instance and provides a global point of access to it.

**Example:** Application configuration that is shared across the entire app.

| Class | Role |
|---|---|
| `AppConfig` | Singleton with type-safe `get`/`set` accessors for app settings |
| `AppSettings` | Interface defining all configuration properties |

```typescript
const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

config1 === config2; // true — same instance

config1.set("port", 8080);
config2.get("port"); // 8080 — shared state
```

---

### 6. Observer Pattern

**Category:** Behavioural  
**Folder:** `src/services/observer/`

Defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.

**Example:** Event notification system with Email, Log, and Slack observers.

| Class | Role |
|---|---|
| `Observer` | Interface with an `update(event, data)` method |
| `Subject` | Interface for subscribe/unsubscribe/notify |
| `EventBus` | Concrete subject that manages event subscriptions |
| `EmailObserver` | Sends email notifications on events |
| `LogObserver` | Logs events with timestamps |
| `SlackObserver` | Posts event notifications to Slack |

```typescript
const eventBus = new EventBus();

eventBus.subscribe("user:signup", new EmailObserver());
eventBus.subscribe("user:signup", new SlackObserver());

eventBus.notify("user:signup", { userId: "u-1", email: "alice@example.com" });
```

---

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Dev runner:** tsx

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
