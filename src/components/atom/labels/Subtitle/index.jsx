import React from "react";

const Subtitle = (props) => {
  const { children } = props;

  return (
    <p className="font-semibold tracking-widest text-[35px]">
      {children}
    </p>
  );
};

export default Subtitle;
