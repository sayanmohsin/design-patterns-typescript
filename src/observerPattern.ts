// Observer: Imagine a group chat where everyone gets updates—objects stay informed quietly.

interface Observer {
  update(data: any): void;
}

class User implements Observer {
  constructor(private name: string) {}

  update(data: any): void {
    console.log(`${this.name} received: ${data}`);
  }
}

class NotificationService {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  sendNotification(data: any): void {
    this.observers.forEach((observer) => observer.update(data));
  }
}

export default ((): void => {
  const notificationService = new NotificationService();

  const user1 = new User("Messi");
  const user2 = new User("Ronaldo");

  notificationService.addObserver(user1);
  notificationService.addObserver(user2);

  notificationService.sendNotification("New notification!");

  notificationService.removeObserver(user2);
  user1.update("Changed notification settings!");

  notificationService.addObserver(user2);
  notificationService.sendNotification("Important update!");
})();
