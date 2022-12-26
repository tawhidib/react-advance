import React from "react";

function Example(props) {
  return <div>{props.render(["home", "about", "contact", "service"])}</div>;
}

export default Example;
