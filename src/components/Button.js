const { createElement } = require("react");

const log = ({ target }) => console.log({ target });

module.exports = ({ disabled = false, onClick = log, text = "click me" }) =>
  createElement("button", {
    children: text,
    onClick,
    style: { background: disabled ? "red" : "green" }
  });
