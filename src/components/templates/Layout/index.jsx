import React from "react";
import Navbar from "@/components/organisms/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-column justify-start">
        <div className=" w-screen flex flex-column justify-start">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
