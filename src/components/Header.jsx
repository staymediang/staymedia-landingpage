import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { LiaUserLockSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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
      <div className="header-top py-8 px-4 md:px-24 bg-white z-20">
        <div className="flex flex-row gap-3 items-center text-xs text-[#676763]">
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
        className={`hidden z-100 md:flex flex-row bg-[#fdfdfd] justify-between items-center px-4 md:px-24 py-6 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
        }`}
      >
        <div className="flex flex-row gap-3 items-center text-xs font-bold text-[#303030]">
          <p className="text-2xl pr-3">Logo</p>
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

        <div className="flex flex-row items-center gap-2">
          <button className="hbutton-one">Contact sales</button>
          <button className="hbutton-two">Free Trial</button>
        </div>
      </div>

      {/* Spacer to prevent layout shift when the header becomes fixed */}
      {isFixed && <div className="h-16 md:h-20"></div>}
    </div>
  );
};

export default Header;
