import { AppConfig } from "./index";

export function runSingletonDemo(): void {
  console.log("=== Singleton Pattern Demo ===\n");

  const config1 = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();

  console.log(`Same instance? ${config1 === config2}`);

  // Read defaults
  console.log(`\nDefault settings:`);
  console.log(`  App: ${config1.get("appName")} v${config1.get("version")}`);
  console.log(`  Port: ${config1.get("port")}`);
  console.log(`  DB: ${config1.get("dbHost")}:${config1.get("dbPort")}`);
  console.log(`  Log Level: ${config1.get("logLevel")}`);

  // Update via one reference, read from the other
  config1.set("port", 8080);
  config1.set("logLevel", "debug");
  config1.set("apiKey", "sk-abc123");

  console.log(`\nUpdated settings (read from second reference):`);
  console.log(`  Port: ${config2.get("port")}`);
  console.log(`  Log Level: ${config2.get("logLevel")}`);
  console.log(`  API Key: ${config2.get("apiKey")}`);

  config1.reset();
  console.log("");
}
