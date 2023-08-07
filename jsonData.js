const jsonData = [
  {
    tag: "h1",
    content: "Welcome to My Website",
    styles: { color: "#333", "text-align": "center", "margin-bottom": "20px" },
  },
  {
    tag: "p",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    styles: { color: "#666", "font-size": "16px", "line-height": "1.5" },
  },
  {
    tag: "div",
    content: "This is a styled div.",
    styles: { color: "blue", "font-size": "18px", border: "2px solid #ccc", padding: "10px", "margin-bottom": "20px" },
    children: [
      {
        tag: "p",
        content: "This is a paragraph inside the div.",
        attributes: { class: "my-class" },
        styles: { color: "green", "line-height": "1.2" },
      },
      {
        tag: "a",
        content: "Click me",
        attributes: { href: "https://example.com", target: "_blank" },
        styles: { color: "red", "text-decoration": "none" },
      },
    ],
  },
  {
    tag: "ul",
    children: [
      { tag: "li", content: "Item 1" },
      { tag: "li", content: "Item 2" },
      { tag: "li", content: "Item 3" },
    ],
    styles: { "list-style-type": "disc", "margin-left": "20px" },
  },
];
