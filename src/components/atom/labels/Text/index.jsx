import React from "react";

const Text = (props) => {
  const { children } = props;

  return <p className="font-normal">{children}</p>;
};

export default Text;
