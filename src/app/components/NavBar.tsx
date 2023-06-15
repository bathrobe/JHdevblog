"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-transparent text-creamy-white py-4 px-4 md:px-0">
      <div className="max-w-800 mx-auto mt-2 flex justify-between items-center">
        {pathname === "/" ? (
          ""
        ) : (
          <Link className="hover:text-green-300 " href="/">
            Projects
          </Link>
        )}
        <div />
        <div className="flex justify-evenly">
          <Link className="px-4 hover:text-green-300 " href="/studies">
            Studies
          </Link>
          <Link className="px-4 hover:text-green-300 " href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
