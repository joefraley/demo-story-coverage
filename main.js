const { storiesOf } = require("@storybook/react");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const Text = ({ children, text }) => {
  if (children) {
    return createElement("p", { children: text });
  } else {
    return createElement("p", { children });
  }
};

const sayHey = () => Text({ text: "hey" });
// const render = dom => renderToString(dom());

// render(sayHey);

storiesOf("Text", module).add("can say hello", sayHey);
