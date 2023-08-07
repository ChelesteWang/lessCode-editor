function generateElement(element) {
  const { tag, attributes = {}, content = "", styles = {}, children = [] } = element;
  const attributesStr = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  let htmlCode = `<${tag} ${attributesStr}>${content}`;
  if (children.length > 0) {
    htmlCode += "<div style=\"display: flex;\">";
    children.forEach((child) => {
      htmlCode += `<div>${child.content}</div>`;
    });
    htmlCode += "</div>";
  }
  htmlCode += `</${tag}>\n`;

  return htmlCode;
}

function generateHTML(jsonData) {
  let htmlCode = "<html>\n<head>\n<title>Generated Page</title>\n<style>\n";

  jsonData.forEach((element) => {
    const { tag, styles = {} } = element;

    htmlCode += `${tag} {`;
    const cssProperties = Object.entries(styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
    htmlCode += `${cssProperties}}\n`;
  });

  htmlCode += "</style>\n</head>\n<body>\n";

  jsonData.forEach((element) => {
    const elementHTML = generateElement(element);
    htmlCode += elementHTML;
  });

  htmlCode += "</body>\n</html>";

  return htmlCode;
}

const jsonData = [
  {
    tag: "h1",
    content: "Hello, World!",
    styles: { color: "#333", "text-align": "center", "margin-bottom": "20px" },
  },
  {
    tag: "div",
    content: "This is a styled div.",
    styles: { color: "red", "font-size": "20px", border: "1px solid #ccc", padding: "10px", "margin-bottom": "20px" },
    children: [
      {
        tag: "p",
        content: "This is a paragraph.",
        attributes: { class: "my-class" },
        styles: { color: "#666", "line-height": "1.5" },
      },
    ],
  },
  {
    tag: "button",
    content: "Click me!",
    attributes: { id: "my-button" },
    event: "my-button",
    action: "click",
    styles: {
      "background-color": "#4caf50",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
    },
  },
];

// 生成完整的 HTML 代码
const generatedHTML = generateHTML(jsonData);

// 创建一个新的 Blob 对象
const blob = new Blob([generatedHTML], { type: "text/html" });

// 创建一个 URL 对象
const url = URL.createObjectURL(blob);

// 在新窗口中打开生成的完整 HTML 文件
window.open(url);
