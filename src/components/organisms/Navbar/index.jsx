import ButtonNavbar from "@/components/atom/buttons/ButtonNavbar";
import Link from "next/link";
import React from "react";

function Navbar() {
  const menuItems = [
    { id: 1, label: "HOME", link: "/" },
    { id: 2, label: "ABOUT", link: "/about" },
    { id: 3, label: "SERVICE", link: "/service" },
    { id: 4, label: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      <div className="mx-auto flex h-24 navbar">
        <div className="flex-1 h-24">
          <a className="btn btn-ghost normal-case text-xl">LOGO</a>
        </div>
        <div className="flex-none just">
          <ul className="menu menu-horizontal flex h-24 ">
            {menuItems.map(({ ...menu }) => {
              return (
                <>
                  <li>
                    <Link href={menu.link}>
                      <ButtonNavbar>{menu.label}</ButtonNavbar>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
