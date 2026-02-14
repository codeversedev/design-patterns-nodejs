export interface AppSettings {
  appName: string;
  version: string;
  port: number;
  dbHost: string;
  dbPort: number;
  logLevel: "debug" | "info" | "warn" | "error";
  apiKey?: string;
}

const defaults: AppSettings = {
  appName: "MyApp",
  version: "1.0.0",
  port: 3000,
  dbHost: "localhost",
  dbPort: 5432,
  logLevel: "info",
};

export class AppConfig {
  private static instance: AppConfig;
  private settings: AppSettings;

  // Private constructor prevents direct instantiation
  private constructor() {
    this.settings = { ...defaults };
  }

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  get<K extends keyof AppSettings>(key: K): AppSettings[K] {
    return this.settings[key];
  }

  set<K extends keyof AppSettings>(key: K, value: AppSettings[K]): void {
    this.settings[key] = value;
  }

  getAll(): AppSettings {
    return { ...this.settings };
  }

  reset(): void {
    this.settings = { ...defaults };
  }
}
