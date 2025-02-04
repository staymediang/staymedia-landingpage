import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
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
          <Link className="text-[#fbb52f]">how will your business run?</Link>
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
                className={`relative group flex flex-row items-center hover:text-pink-500 gap-2 px-5 py-2 justify-center cursor-pointer greenText hover:greenText/60 
      ${isFixed ? "border-none" : "border-t-[1px] border-t-gray-400"}`}
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
                <Link className="text-[#fbb52f]">(+234) 802 325 0782</Link>
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
        className={`fixed top-[5rem] flex flex-col justify-between right-0 w-[98%] h-[92vh] bg-white shadow-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div>
          {/* Admin Login & Search Input */}
          <div className="flex flex-row text-xl justify-between items-center w-full gap-2 px-4 py-6 border-b">
            <Link className="flex items-center gap-2 text-gray-700">
              <LiaUserLockSolid size={30} />
              <span className="text-">Admin Login</span>
            </Link>
            <span className="flex text-xl px-2 flex-row gap-2 cursor-pointer items-center justify-center">
              <p>
                <MdSearch size={25} />
              </p>{" "}
              Search
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col text-2xl text-gray-800">
            <span className="flex flex-row items-center gap-2 justify-between cursor-pointer border-b px-4 py-6 hover:text-[#6bbf4f]">
              <p>Our product</p>
              <p>
                <FaAngleDown size={30} />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-between cursor-pointer border-b px-4 py-6 hover:text-[#6bbf4f]">
              <p>Solutions</p>
              <p>
                <FaAngleDown size={30} />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-between cursor-pointer border-b px-4 py-6 hover:text-[#6bbf4f]">
              <p>Why Duo</p>
              <p>
                <FaAngleDown size={30} />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-between cursor-pointer border-b px-4 py-6 hover:text-[#6bbf4f]">
              <p>Pricing</p>
              <p>
                <FaAngleDown size={30} />
              </p>
            </span>
          </nav>
        </div>

        {/* Buttons at the Bottom */}
        <div className=" w-full mb-4 flex justify-between px-4 gap-4">
          <button className="button-one w-[50%]">Contact Sales</button>
          <button className="button-two w-[50%]">Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
