import * as React from "react";

const PrimaryButton = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={"btn bg-primary border-4 rounded-full border-white text-white"}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
