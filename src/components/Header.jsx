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
    <div className="flex flex-col">
      {/* TOP HEADER - Stays Static */}
      <div className="hidden lg:grid header-top py-8 px-4 md:px-24 bg-white z-20">
        <div className="flex flex-row gap-3 items-center text-sm text-[#676763]">
          <span className="flex flex-row gap-1 cursor-pointer items-center justify-center">
            <p>
              <MdSearch size={18} />
            </p>{" "}
            Search
          </span>
          <Link>Duo Blog</Link>
          <span className="flex flex-row gap-1 cursor-pointer items-center">
            <p>Docs & Support</p>{" "}
            <p>
              <FaAngleDown />
            </p>
          </span>
          <Link className="flex flex-row items-center gap-1">
            <p>
              <LiaUserLockSolid />
            </p>{" "}
            <p>Admin Login</p>
          </Link>
        </div>
      </div>

      {/* BOTTOM HEADER - Becomes Fixed on Scroll */}
      <div
        className={`z-50 flex flex-row bg-[#fdfdfd] justify-between items-center px-4 lg:px-24 py-6 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
        }`}
      >
        <div className="flex flex-row gap-3 justify-between md:justify-normal items-center text-sm font-bold text-[#303030]">
          <p className="text-3xl pr-3">Logo</p>
          <div className="hidden lg:flex flex-row gap-3">
            <span className="flex flex-row items-center gap-2 justify-center cursor-pointer hover:text-[#6bbf4f]">
              <p>Our product</p>
              <p>
                <FaAngleDown />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-center cursor-pointer hover:text-[#6bbf4f]">
              <p>Solutions</p>
              <p>
                <FaAngleDown />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-center cursor-pointer hover:text-[#6bbf4f]">
              <p>Why Duo</p>
              <p>
                <FaAngleDown />
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 justify-center cursor-pointer hover:text-[#6bbf4f]">
              <p>Pricing</p>
              <p>
                <FaAngleDown />
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-8 items-center">
          <div className="hidden sm:flex flex-row items-center gap-2">
            <button className="hbutton-one">Contact sales</button>
            <button className="hbutton-two">Free Trial</button>
          </div>

          {/* Menu Button */}
          <div
            className="hover:text-[#6bbf4f] lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose size={35} /> : <MdMenu size={35} />}
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
