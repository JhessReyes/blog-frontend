import React from "react";
import Navbar from "@/components/organisms/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-column justify-start">
        <div className="flex flex-column justify-start">{children}</div>
      </div>
    </>
  );
}

export default Layout;
