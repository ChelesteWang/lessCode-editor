function generateHTML(jsonData) {
  let htmlCode = "<html>\n<head>\n<title>Generated Page</title>\n</head>\n<body>\n";

  jsonData.forEach((element) => {
    const { tag, attributes = {}, content = "" } = element;
    const attributesStr = Object.entries(attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");

    htmlCode += `<${tag} ${attributesStr}>${content}</${tag}>\n`;
  });

  htmlCode += "</body>\n</html>";

  return htmlCode;
}

function generateCSS(jsonData) {
  let cssCode = "";

  jsonData.forEach((element) => {
    const { tag, styles = {} } = element;
    const stylesStr = Object.entries(styles)
      .map(([key, value]) => `${key}: ${value}`)
      .join("; ");

    cssCode += `${tag} { ${stylesStr} }\n`;
  });

  return cssCode;
}

function generateJS(jsonData) {
  let jsCode = "<script>\n";

  jsonData.forEach((element) => {
    const { event, action } = element;

    if (event && action) {
      jsCode += `document.getElementById('${event}').addEventListener('${action}', function() {\n`;
      jsCode += "\t// Add your JavaScript code here\n";
      jsCode += "});\n";
    }
  });

  jsCode += "</script>";

  return jsCode;
}

// 示例 JSON 数据
const jsonData = [
  {
    tag: "h1",
    content: "Hello, World!",
  },
  {
    tag: "p",
    content: "This is a paragraph.",
    attributes: { class: "my-class" },
  },
  {
    tag: "div",
    styles: { color: "red", "font-size": "20px" },
    content: "This is a styled div.",
  },
  {
    tag: "button",
    content: "Click me!",
    attributes: { id: "my-button" },
    event: "my-button",
    action: "click",
  },
];

function generateCompleteHTML(jsonData) {
  const htmlCode = generateHTML(jsonData);
  const cssCode = generateCSS(jsonData);
  const jsCode = generateJS(jsonData);

  const completeHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Generated Page</title>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        ${jsCode}
      </body>
    </html>
  `;

  return completeHTML;
}

// 生成完整的 HTML 代码
const completeHTML = generateCompleteHTML(jsonData);

// 创建一个新的 Blob 对象
const blob = new Blob([completeHTML], { type: "text/html" });

// 创建一个 URL 对象
const url = URL.createObjectURL(blob);

// 在新窗口中打开生成的完整 HTML 文件
window.open(url);
