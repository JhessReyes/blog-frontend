import React from "react";
import Navbar from "@/components/organisms/Navbar";

function Layout({ children }) {
  return (
    <>
      <div className="bg-primary w-full h-screen overflow-scroll overflow-x-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
        <div className="sm:px-16 px-6 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full text-white">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
