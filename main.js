const { storiesOf } = require("@storybook/react");
const { createElement } = require("react");

// Here's a component
const Text = ({ children, text }) => {
  // you want to make sure that each code path is measured by a story

  // so here's one where props.text is given
  if (text) return createElement("p", { children: text });
  else
    // here's one where it isn't
    return createElement("p", { children });
};

// here's a story that exercises props.text
const sayHey = () => Text({ text: "hey" });

// this call to sayHey is implicit...so coverage tools don't know how to count it
storiesOf("Text", module).add("can say hello", sayHey);
