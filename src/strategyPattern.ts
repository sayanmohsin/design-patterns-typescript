// Strategy: Think of a toolbox with various tools for different tasks—select the perfect fit.

interface TransportationStrategy {
  calculateDistance(start: string, end: string): number;
}

class DrivingStrategy implements TransportationStrategy {
  calculateDistance(start: string, end: string): number {
    return 10;
  }
}

class WalkingStrategy implements TransportationStrategy {
  calculateDistance(start: string, end: string): number {
    return 3;
  }
}

class CyclingStrategy implements TransportationStrategy {
  calculateDistance(start: string, end: string): number {
    return 5;
  }
}

class NavigationApp {
  private strategy: TransportationStrategy;

  constructor(strategy: TransportationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: TransportationStrategy): void {
    this.strategy = strategy;
  }

  navigate(start: string, end: string): void {
    const distance = this.strategy.calculateDistance(start, end);
    console.log(`Distance from ${start} to ${end}: ${distance} km`);
  }
}

export default ((): void => {
  const driving = new DrivingStrategy();
  const walking = new WalkingStrategy();
  const cycling = new CyclingStrategy();

  const navigation = new NavigationApp(driving);
  navigation.navigate("Home", "Office");

  navigation.setStrategy(walking);
  navigation.navigate("Park", "Museum");

  navigation.setStrategy(cycling);
  navigation.navigate("Gym", "Café");
})();
