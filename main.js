const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const Text = ({ children, text }) =>
  createElement("p", { children: text || children });

renderToString(Text({ text: "hey" }));
