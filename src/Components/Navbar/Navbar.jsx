import React, { useState } from "react";
import { logo } from "../../assets/Imges";
import { navLinks } from "../Constant/Constant";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between xl:justify-around container pt-3">
        {/* Logo */}
        <div className="logo w-[70px]">
          <img className="w-full h-auto" src={logo} alt="logo" />
        </div>

        {/* Nav Links (Desktop) */}
        <div className="lists hidden md:flex">
          <ul className="flex gap-6">
            {navLinks.map((data, index) => (
              <li
                key={index}
                className="flex items-center gap-1 font-medium cursor-pointer"
              >
                {data.title}
                {(data.title === "Products" ||
                  data.title === "Company" ||
                  data.title === "Resources") && <IoIosArrowDown />}
              </li>
            ))}
          </ul>
        </div>

        {/* Language + Login + Get Started (Desktop) */}
        <div className="Main-for-lang-login-started items-center gap-3 hidden lg:flex">
          <div className="language flex items-center gap-1">
            <h1 className="font-medium">EN</h1>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="login border border-black px-6 py-2 rounded-full font-medium">
            <h1>Log in</h1>
          </div>
          <div className="get-started border px-7 py-3 rounded-full text-white bg-[#47A2D8] font-medium">
            <h1>Get Started for Free</h1>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu md:hidden z-50" onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose className="text-[#0099F4]" size={40} />
          ) : (
            <IoMenu className="text-[#0099F4]" size={40} />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md transition-all duration-500 overflow-hidden md:hidden ${
          open ? "max-h-[500px] opacity-100 pt-20" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-5">
          {navLinks.map((data, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-lg font-medium cursor-pointer"
            >
              {data.title}
              {(data.title === "Products" ||
                data.title === "Company" ||
                data.title === "Resources") && <IoIosArrowDown />}
            </li>
          ))}
          <div className="language flex items-center gap-1">
            <h1 className="font-medium">EN</h1>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button className="border border-black px-10 py-2 rounded-full font-medium">
              Log in
            </button>
            <button className="border px-10 py-3 rounded-full text-white bg-[#47A2D8] font-medium">
              Get Started for Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
