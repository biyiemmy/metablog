"use client";
import { useState } from "react";
import { Logo } from "./SVG";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/author", label: "Author" },
  { href: "/post", label: "Post" },
];

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full sm:w-full bg-white dark:bg-[#181A2A] dark:text-[#FFFFFF] shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex justify-start">
          <Logo />
        </div>

        <div className="sm:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <ul className="hidden sm:flex justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex justify-end items-center space-x-4">
          <input
            type="search"
            placeholder="Search..."
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          />
          <ToggleSwitch />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#181A2A] p-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center space-y-4">
            <input
              type="search"
              placeholder="Search..."
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            />
            <ToggleSwitch />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
