import * as React from "react";

const Button = (props) => {
  const { onClick, children, className, disabled } = props;

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
