import React from "react";

function Navbar() {
  return (
    <>
      <div className="mx-auto flex h-24 navbar bg-base-100">
        <div className="flex-1 h-24">
          <a className="btn btn-ghost normal-case text-xl">LOGO</a>
        </div>
        <div className="flex-none just">
          <ul className="menu menu-horizontal flex h-24 ">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>SERVICE</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
