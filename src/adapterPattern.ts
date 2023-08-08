// Adapter: Visualize having big headphones and a small phone—adapter makes them compatible.

interface ModernMessagingService {
  sendMessage(text: string, recipient: string): void;
}

class OldMessagingSystem {
  sendEmailMessage(email: string, content: string): void {
    console.log(`Old Messaging System: Sending email to ${email} - ${content}`);
  }
}

class MessagingAdapter implements ModernMessagingService {
  constructor(private oldSystem: OldMessagingSystem) {}

  sendMessage(text: string, recipient: string): void {
    console.log("Adapter: Adapting and sending message...");
    const emailContent = `Message: ${text}`;
    this.oldSystem.sendEmailMessage(recipient, emailContent);
  }
}

const oldSystem = new OldMessagingSystem();
const adapter = new MessagingAdapter(oldSystem);

function sendAppMessage(
  messenger: ModernMessagingService,
  text: string,
  recipient: string
): void {
  messenger.sendMessage(text, recipient);
}

export default ((): void => {
  sendAppMessage(adapter, "Hello there!", "user@example.com");
})();
