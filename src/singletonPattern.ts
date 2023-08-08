// Singleton: Imagine an office with just one boss—consistent decisions, clear order.

class ConfigurationManagerSingleton {
  private static instance: ConfigurationManagerSingleton;
  private configData: { [key: string]: any } = {};

  private constructor() {
    this.configData = {
      apiKey: "bb3430a3-25e1-423f-b70e-a4adf3f37b6e",
      apiSecret: "91060c61-mqmi-9912-ndvm-ed14f43394c8",
    };
  }

  static getInstance(): ConfigurationManagerSingleton {
    if (!this.instance) {
      this.instance = new ConfigurationManagerSingleton();
    }
    return this.instance;
  }

  getConfig(key: string): any {
    return this.configData[key];
  }

  setConfig(key: string, value: any): void {
    this.configData[key] = value;
  }
}

export default ((): void => {
  const configManager = ConfigurationManagerSingleton.getInstance();
  console.log(configManager.getConfig("apiKey"));
  console.log(configManager.getConfig("apiSecret"));

  configManager.setConfig("apiKey", "new-api-key");
  console.log(configManager.getConfig("apiKey"));
})();
