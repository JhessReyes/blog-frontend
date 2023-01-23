import React from "react";

const Title = (props) => {
  const { children } = props;

  return (
    <p
      className={
        "text-[50px] sm:text-[70px] font-extrabold tracking-widest"
      }
    >
      {children}
    </p>
  );
};

export default Title;
