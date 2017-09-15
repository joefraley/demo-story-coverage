const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const Text = ({ children, text }) =>
  createElement("p", { children: text || children });
const sayHey = () => Text({ text: "hey" });
const render = dom => renderToString(dom());

render(sayHey);
