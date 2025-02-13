import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { LiaUserLockSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col z-[90]">
      {/* TOP HEADER - Stays Static */}
      <div className=" py-2 px-4 md:px-24 greenBg z-20">
        <span className="flex flex-row gap-1 text-sm items-center">
          <p className="text-white">If social networks shut down for 24hrs,</p>
          <Link className="text-[#fcb52f]">how will your business run?</Link>
        </span>
      </div>

      {/* BOTTOM HEADER - Becomes Fixed on Scroll */}
      <div
        className={`z-50 flex flex-row bg-[#fdfdfd] justify-between items-center px-4 lg:px-24 py-6 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 w-full shadow-md z-100" : ""
        }`}
      >
        <div className="flex flex-row gap-3 justify-between md:justify-normal items-center text-sm font-bold">
          <div className="w-[10rem] pr-3">
            <img
              src="https://staymedia.ng/wp-content/uploads/2023/08/STAYMEDIA_1_logo.png"
              alt=""
            />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col gap-3">
          <div
            className={`flex-row justify-center items-center text-sm gap-1 ${
              isFixed ? "hidden" : "hidden md:flex"
            }`}
          >
            <p className="greenText">Internship Opportunity:</p>
            <p className="text-gray-400">Come intern with us to improve you.</p>
          </div>
          <div className="hidden lg:flex flex-row justify-center text-base font-[500]">
            {["Home", "About", "Services", "Solutions", "More"].map((item) => (
              <span
                key={item}
                className={`relative group flex flex-row items-center  gap-2 px-5 py-2 justify-center cursor-pointer greenText hover:greenText/60 
      ${
        isFixed
          ? "border-none hover:text-pink-500"
          : "border-t-[1px] border-t-gray-400"
      }`}
              >
                <p>{item}</p>
                {/* Animated Border */}
                <div
                  className={`absolute top-0 left-0 h-[2px] bg-gray-700 w-0 transition-all duration-700 ease-out group-hover:w-full ${
                    isFixed ? "hidden" : "block"
                  }`}
                ></div>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-8 text-sm items-center">
          <div className="hidden sm:flex flex-row items-center gap-1">
            <div className="w-[2.5rem]">
              <img
                className="w-fit"
                src="https://staymedia.ng/wp-content/uploads/2021/03/web-graphics-30.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1 justify-center text-gray-400">
              <p>Have any questions?</p>
              <span className="flex flex-row items-center gap-1">
                <p>Free:</p>
                <Link className="text-[#fcb52f]">(+234) 802 325 0782</Link>
              </span>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="md:border-l-gray-400 md:border-l flex flex-row gap-3">
            <MdSearch className="greenText pl-2 hidden md:block" size={40} />
            {/* Menu Button */}
            <div
              className="hover:greenText lg:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <MdClose size={35} /> : <MdMenu size={35} />}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent layout shift when the header becomes fixed */}
      {isFixed && <div className="h-16 md:h-20"></div>}

      {/* Mobile Menu */}
      <div
        className={`fixed px-4 py-8 top-0 flex flex-col justify-between right-0 w-[100%] h-[100vh] greenBg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div>
          {/* Admin Login & Search Input */}
          <div className="flex flex-row text-xl justify-end items-center w-full gap-2 pb-10">
            {/* <span className="flex text-xl px-2 flex-row gap-2 cursor-pointer items-center justify-center">
              <p>
                <MdSearch size={25} />
              </p>{" "}
              Search
            </span> */}
            <div
              className=" text-white bg-[#fcb52f] rounded-full p-2 lg:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <MdClose size={35} /> : <MdMenu size={35} />}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col font-semibold w-full text-2xl text-[#f8f8f8]">
            <Link
              to={"/"}
              className="flex flex-row items-center gap-2 justify-between cursor-pointer px-4 py-4 hover:text-[#6bbf4f]"
            >
              <p>Home</p>
            </Link>
            <Link
              to={"/"}
              className="flex flex-row items-center gap-2 justify-between cursor-pointer px-4 py-4 hover:text-[#6bbf4f]"
            >
              <p>About</p>
              <p className="border border-[#88d39f] p-2 rounded-md">
                <FaAngleRight size={30} />
              </p>
            </Link>
            <Link
              to={"/"}
              className="flex flex-row items-center gap-2 justify-between cursor-pointer  px-4 py-4 hover:text-[#6bbf4f]"
            >
              <p>Services</p>
              <p className="border border-[#88d39f] p-2 rounded-md">
                <FaAngleRight size={30} />
              </p>
            </Link>
            <Link className="flex flex-row items-center gap-2 justify-between cursor-pointer px-4 py-4 hover:text-[#6bbf4f]">
              <p>Solutions</p>
              <p className="border border-[#88d39f] p-2 rounded-md">
                <FaAngleRight size={30} />
              </p>
            </Link>
            <Link className="flex flex-row items-center gap-2 justify-between cursor-pointer px-4 py-4 hover:text-[#6bbf4f]">
              <p>More</p>
              <p className="border border-[#88d39f] p-2 rounded-md">
                <FaAngleRight size={30} />
              </p>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
