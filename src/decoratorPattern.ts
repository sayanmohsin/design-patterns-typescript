// Decorator: Transform a basic cupcake into an exquisite delight—add layers without altering taste.

interface TextComponent {
  formatText(): string;
}

class PlainText implements TextComponent {
  constructor(private content: string) {}

  formatText(): string {
    return this.content;
  }
}

class BoldDecorator implements TextComponent {
  constructor(private component: TextComponent) {}

  formatText(): string {
    return `<strong>${this.component.formatText()}</strong>`;
  }
}

class ItalicDecorator implements TextComponent {
  constructor(private component: TextComponent) {}

  formatText(): string {
    return `<em>${this.component.formatText()}</em>`;
  }
}

export default ((): void => {
  const plainText = new PlainText("Hello, world!");

  const boldText = new BoldDecorator(plainText);
  const italicText = new ItalicDecorator(plainText);
  const boldItalicText = new ItalicDecorator(new BoldDecorator(plainText));

  console.log("Plain Text:", plainText.formatText());
  console.log("Bold Text:", boldText.formatText());
  console.log("Italic Text:", italicText.formatText());
  console.log("Bold Italic Text:", boldItalicText.formatText());
})();
