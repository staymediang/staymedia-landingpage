import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="header-top py-6 px-[65px]">
        <div className="flex flex-row gap-2 text-sm text-[#676763]">
          <p className="">Search</p>
          <p>Duo Blog</p>
          <p>Docs & Support</p>
          <p>Admin Login</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-row justify-between items-center px-[65px] py-4">
        <div className="flex flex-row gap-2 items-center text-sm font-medium">
          <p>Logo</p>
          <p>Our product v</p>
          <p>Solutions v</p>
          <p>Why Duo v</p>
          <p>Pricing v</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <button className="hbutton-one">Contact sales</button>
          <button className="hbutton-two">Free Trial </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
