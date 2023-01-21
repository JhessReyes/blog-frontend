import React from "react";

const ButtonNavbar = (props) => {
  const { onClick, children, className, disabled } = props;

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default ButtonNavbar;
