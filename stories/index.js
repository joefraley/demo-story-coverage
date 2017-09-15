const { createElement } = require("react");
const { storiesOf } = require("@storybook/react");
const Button = require("../src/components/Button");

const disabledButton = () =>
  createElement(Button, {
    disabled: false,
    text: "hello!"
  });

storiesOf("Button", module).add("disabled", disabledButton);
