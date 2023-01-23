import { Close } from "@/components/atom/icons/Close";
import { Menu } from "@/components/atom/icons/Menu";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const menuItems = [
    { id: 1, label: "HOME", link: "/" },
    { id: 2, label: "ABOUT", link: "/about" },
    { id: 3, label: "SERVICE", link: "/service" },
    { id: 4, label: "CONTACT", link: "/contact" },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="mx-auto h-24 navbar">
        <div className="flex-1 h-24">
          <a className="normal-case text-xl text-white">LOGO</a>
        </div>
        <div className="flex-none just">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {menuItems.map(({ ...menu }) => {
              return (
                <>
                  <li
                    key={menu.id}
                    className="font-poppins font-normal 
                    cursor-pointer text-[16px] text-white mr-10"
                  >
                    <Link href={menu.link}>{menu.label}</Link>
                  </li>
                </>
              );
            })}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div
              className="cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? (
                <Close className="text-white w-[28px] h-[28px]" />
              ) : (
                <Menu className="text-white w-[28px] h-[28px]" />
              )}
            </div>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-gradient-to-r from-secondary absolute
               top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="list-none justify-end items-center">
                {menuItems.map(({ ...menu }) => {
                  return (
                    <>
                      <li
                        key={menu.id}
                        className="font-poppins font-normal 
                    cursor-pointer text-[16px] text-white mb-4"
                      >
                        <Link href={menu.link}>{menu.label}</Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
